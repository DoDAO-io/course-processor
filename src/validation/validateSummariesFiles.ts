import fs from 'fs';
import { Validator } from 'jsonschema';
import YAML from 'yaml';
import { readFilesSync } from '../utils/readFilesSync';
import summariesFileSchema from './schemas/summariesFileSchema.json';
import { throwValidationError } from './throwValidationError';

export function validateSummariesFiles(summariesDirectory: string) {
  const summaryFiles = readFilesSync(summariesDirectory);
  summaryFiles.forEach(summaryFile => {
    console.log('validate summary file ', summaryFile.filepath);
    const file = fs.readFileSync(summaryFile.filepath, 'utf8');
    const summariesJson = YAML.parse(file);
    const v = new Validator();
    const res = v.validate(summariesJson, summariesFileSchema, {
      allowUnknownAttributes: false,
      required: true,
      throwAll: true,
      nestedErrors: true,
      throwError: true,
    });
    if (!res.valid) {
      throwValidationError(summaryFile.filepath, res.errors);
    }
  });
}
