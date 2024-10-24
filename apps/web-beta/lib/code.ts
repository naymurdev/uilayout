import fs from 'fs';
import path from 'path';

export const extractCodeFromFilePath = (filePath: string) => {
  const absolutePath = path.join(process.cwd(), filePath);
  return fs.readFileSync(absolutePath, 'utf-8');
};
