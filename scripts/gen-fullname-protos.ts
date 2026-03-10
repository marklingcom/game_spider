import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const rootDir = path.resolve(__dirname, '..');
const configPath = path.join(rootDir, 'config', 'awc-JILI-SLOT.json');
const protoPath = path.join(rootDir, 'src', 'proto');
const outputDir = path.join(rootDir, 'src', 'protoFullname');

interface ConfigItem {
  fullName: string;
  gi: number | null;
  name: string;
  uuid: string;
}

function fullNameToProtoFileName(fullName: string): string {
  const cleaned = fullName.replace(/'/g, '');
  const words = cleaned.split(/\s+/).filter(Boolean);
  return words
    .map((w) =>
      w.match(/^[0-9a-zA-Z]+$/) && w.length > 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w
    )
    .join('');
}

const configList: ConfigItem[] = JSON.parse(fs.readFileSync(configPath, 'utf8'));

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const protoFiles = fs.readdirSync(protoPath);
for (const file of protoFiles) {
  const name = file.replace('.proto', '');
  const config = configList.find((item) => item.name === name);

  if (config) {
    const filePath = path.join(protoPath, file);
    const text = fs.readFileSync(filePath, 'utf8');
    const fileName = fullNameToProtoFileName(config.fullName);
    const outFilePath = path.join(outputDir, `${fileName}.proto`);
    fs.writeFileSync(outFilePath, text, 'utf8');
  }
}
