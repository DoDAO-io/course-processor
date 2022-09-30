import fs from 'fs';
import { Validator } from 'jsonschema';
import YAML from 'yaml';
import { readFilesSync } from '../utils/readFilesSync';
import explanationsFileSchema from './schemas/explanationsFileSchema.json';
import { throwValidationError } from './throwValidationError';

export function validateExplanationsFiles(explanationsDirectory: string) {
  const explanationFiles = readFilesSync(explanationsDirectory);
  explanationFiles.forEach(explanationFile => {
    console.log('validate explanation file ', explanationFile.filepath);
    const file = fs.readFileSync(explanationFile.filepath, 'utf8');
    const summariesJson = YAML.parse(file);
    const v = new Validator();
    const res = v.validate(summariesJson, explanationsFileSchema, {
      allowUnknownAttributes: false,
      required: true,
      throwAll: true,
      nestedErrors: true,
      throwError: true,
    });
    if (!res.valid) {
      throwValidationError(explanationFile.filepath, res.errors);
    }
  });
}
