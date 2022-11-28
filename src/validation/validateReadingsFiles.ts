import fs from 'fs';
import { Validator } from 'jsonschema';
import YAML from 'yaml';
import { readFilesSyncOptional } from '../utils/readFilesSync';
import readingsFileSchema from './schemas/readingsFileSchema.json';
import readingsQuestionSchema from './schemas/readingsQuestionSchema.json';
import { throwValidationError } from './throwValidationError';

export function validateReadingsFiles(readingsDirectory: string) {
  const readingFiles = readFilesSyncOptional(readingsDirectory);
  readingFiles?.forEach(readingFile => {
    console.log('validate reading file ', readingFile.filepath);
    const file = fs.readFileSync(readingFile.filepath, 'utf8');
    const readingJson = YAML.parse(file);
    const v = new Validator();
    v.addSchema(readingsQuestionSchema, '/ReadingsQuestionSchema');
    const res = v.validate(readingJson, readingsFileSchema);
    if (!res.valid) {
      throwValidationError(readingFile.filepath, res.errors);
    }
  });
}
