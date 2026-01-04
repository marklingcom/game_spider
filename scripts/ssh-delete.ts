import { exec } from 'node:child_process';
import { createInterface } from 'node:readline';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

function waitForConfirmation(path: string): Promise<boolean> {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(`⚠️  确认删除路径: ${path} (输入 y 确认): `, (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

interface SSHConnection {
  host: string;
  user?: string;
  port?: number;
  key?: string;
  password?: string;
}

const cpigameSShConfig: SSHConnection = {
  host: 'cpigame.com',
};

const newProdStaticSShConfig: SSHConnection = {
  host: 'new-prod-static',
};

const sshConfig = cpigameSShConfig;
// const sshConfig = newProdStaticSShConfig;

const deletePaths: string[] = [
  // '/var/www/html/game_static/jili_history_res/',
  // '/var/www/html/game_static/jili_res/tct',
];

function buildSSHCommand(sshConfig: SSHConnection, path: string): string {
  let sshCmd = 'ssh';

  if (sshConfig.port) {
    sshCmd += ` -p ${sshConfig.port}`;
  }

  if (sshConfig.key) {
    sshCmd += ` -i ${sshConfig.key}`;
  }

  if (sshConfig.password) {
    sshCmd = `sshpass -p '${sshConfig.password}' ${sshCmd}`;
  }

  const userHost = sshConfig.user ? `${sshConfig.user}@${sshConfig.host}` : sshConfig.host;
  sshCmd += ` ${userHost}`;

  const targetPath = path.replace(/'/g, "'\\''");
  sshCmd += ` 'sudo rm -rf "${targetPath}"'`;

  return sshCmd;
}

async function deleteRemotePath(sshConfig: SSHConnection, path: string): Promise<void> {
  try {
    const sshCommand = buildSSHCommand(sshConfig, path);
    console.log(`🔗 连接到 ${sshConfig.user ? `${sshConfig.user}@` : ''}${sshConfig.host}...`);
    console.log(`🗑️  删除路径: ${path}`);

    const { stdout, stderr } = await execAsync(sshCommand);

    if (stderr && !stderr.includes('Warning: Permanently added')) {
      console.error(`⚠️  警告: ${stderr}`);
    }

    if (stdout) {
      console.log(stdout);
    }

    console.log(`✅ 删除成功: ${path}`);
  } catch (error) {
    if (error && typeof error === 'object' && 'code' in error && 'stderr' in error) {
      if (error.code === 1 && error.stderr) {
        console.error(`❌ 删除失败: ${error.stderr}`);
      } else {
        console.error(`❌ SSH 连接或执行失败: ${error.message || String(error)}`);
      }
    } else {
      console.error(
        `❌ SSH 连接或执行失败: ${error instanceof Error ? error.message : String(error)}`
      );
    }
    throw error;
  }
}

async function main() {
  try {
    console.log(`📋 准备删除 ${deletePaths.length} 个路径`);
    console.log('');

    for (const path of deletePaths) {
      const confirmed = await waitForConfirmation(path);
      if (!confirmed) {
        console.log(`⏭️  跳过删除: ${path}`);
        console.log('');
        continue;
      }

      await deleteRemotePath(sshConfig, path);
      console.log('');
    }

    console.log('🎉 脚本执行完成');
    process.exit(0);
  } catch (error) {
    console.error('❌ 脚本执行失败:', error);
    process.exit(1);
  }
}

main();
