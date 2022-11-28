import fs from 'fs';
import { Validator } from 'jsonschema';
import YAML from 'yaml';
import { Question } from '../model/Question';
import { readFilesSyncOptional } from '../utils/readFilesSync';
import questionsFileSchema from './schemas/questionsSchema.json';
import { throwValidationError } from './throwValidationError';

export function validateQuestionFiles(questionDirectory: string) {
  const questionFiles = readFilesSyncOptional(questionDirectory);
  questionFiles?.forEach(questionFile => {
    console.log('validate questions file ', questionFile.filepath);
    const file = fs.readFileSync(questionFile.filepath, 'utf8');
    const questionsJson = YAML.parse(file) as Question[];
    const v = new Validator();
    const res = v.validate(questionsJson, questionsFileSchema);
    if (!res.valid) {
      throwValidationError(questionFile.filepath, res.errors);
    }

    questionsJson.forEach(question => {
      if (!Array.isArray(question.answerKeys)) {
        throw Error(
          `Answer Keys of question: ${question.content} is not an array. File ${questionFile.filepath}`
        );
      }
    });
  });
}
