const fs = require('node:fs');

const goContent = fs.readFileSync('src/utils/cacert.go', 'utf8');

const startPattern = 'const cacert = `';
const endPattern = '`';

const startIndex = goContent.indexOf(startPattern);
const endIndex = goContent.lastIndexOf(endPattern);

if (startIndex === -1 || endIndex === -1) {
  console.error('无法找到证书数据的开始或结束标记');
  process.exit(1);
}

const certData = goContent.substring(startIndex + startPattern.length, endIndex);

const tsContent = `import * as https from 'https';
import * as tls from 'tls';

const cacert = \`${certData}\`;

export function getCacert(): Buffer {
  return Buffer.from(cacert, 'utf8');
}

export function initDefaultTransport(): void {
  try {
    const originalCreateConnection = https.globalAgent.createConnection;

    https.globalAgent.createConnection = function(options: any, callback: any) {
      const socket = originalCreateConnection.call(this, options, callback);
      if (options.secureContext) {
        options.secureContext.context.addCACert(cacert);
      }
      return socket;
    };

    console.log('use Certificates');
  } catch (error: any) {
    console.log('can't use Certificates:', error.message);
  }
}

export { cacert };`;

fs.writeFileSync('src/utils/cacert.ts', tsContent);
console.log('TypeScript转换完成，文件大小:', tsContent.length, '字符');
