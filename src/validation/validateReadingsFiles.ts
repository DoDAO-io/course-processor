import fs from 'fs';
import { Validator } from 'jsonschema';
import { throwValidationError } from './throwValidationError';
import { readFilesSync } from '../utils/readFilesSync';
import YAML from 'yaml';
import readingsFileSchema from './schemas/readingsFileSchema.json';
import readingsQuestionSchema from './schemas/readingsQuestionSchema.json';

export function validateReadingsFiles(readingsDirectory: string) {
  const readingFiles = readFilesSync(readingsDirectory);
  readingFiles.forEach(questionFile => {
    const file = fs.readFileSync(questionFile.filepath, 'utf8');
    const readingJson = YAML.parse(file);
    const v = new Validator();
    v.addSchema(readingsQuestionSchema, '/ReadingsQuestionSchema');
    const res = v.validate(readingJson, readingsFileSchema);
    if (!res.valid) {
      throwValidationError(questionFile.filepath, res.errors);
    }
  });
}
