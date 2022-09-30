import fs from 'fs';
import YAML from 'yaml';
import { Explanation } from '../model/Explanation';

export function readExplanations(
  courseDirPath: string,
  explanationsFile: string
): Explanation[] {
  const file = fs.readFileSync(
    `${courseDirPath}/explanations/${explanationsFile}`,
    'utf8'
  );
  return YAML.parse(file) as Explanation[];
}
