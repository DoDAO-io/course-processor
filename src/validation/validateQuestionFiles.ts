import fs from 'fs';
import { Validator } from 'jsonschema';
import { Question } from '../model/Question';
import { throwValidationError } from './throwValidationError';
import { readFilesSync } from '../utils/readFilesSync';
import YAML from 'yaml';
import questionsFileSchema from './schemas/questionsSchema.json';

export function validateQuestionFiles(questionDirectory: string) {
  const questionFiles = readFilesSync(questionDirectory);
  questionFiles.forEach(questionFile => {
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
