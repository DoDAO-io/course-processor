import fs from 'fs';
import every from 'lodash/every';
import YAML from 'yaml';
import { Question } from '../model/Question';
import { Reading } from '../model/Reading';
import { Summary } from '../model/Summary';
import { readFilesSyncOptional } from '../utils/readFilesSync';

export function validateUniqueUUIDs(
  summariesDirectory: string,
  readingsDirectory: string,
  questionDirectory: string
) {
  const uuids: string[] = [];
  const subTopics: string[] = [];

  const summaryFiles = readFilesSyncOptional(summariesDirectory);
  summaryFiles?.forEach(summaryFile => {
    const file = fs.readFileSync(summaryFile.filepath, 'utf8');
    const summariesJson = YAML.parse(file) as Summary[];
    summariesJson.forEach(summary => {
      if (subTopics.includes(summary.key)) {
        throw new Error(`Duplicate summary key ${summary.key}`);
      } else {
        subTopics.push(summary.key);
      }
    });
  });

  const questionFiles = readFilesSyncOptional(questionDirectory);
  questionFiles?.forEach(questionFile => {
    const file = fs.readFileSync(questionFile.filepath, 'utf8');
    const questionsJson = YAML.parse(file) as Question[];

    questionsJson.forEach(question => {
      if (uuids.includes(question.uuid)) {
        throw new Error(
          `Duplicate uuid ${question.uuid} - of ${question.content}. File ${questionFile.filepath}`
        );
      } else {
        uuids.push(question.uuid);
      }

      if (
        !every(question.subTopics, subTopic => subTopics.includes(subTopic))
      ) {
        throw new Error(
          `Unexpected Subtopics ${question.subTopics} - of ${question.content}. File ${questionFile.filepath}`
        );
      }
    });
  });

  const readingFiles = readFilesSyncOptional(readingsDirectory);
  readingFiles?.forEach(readingsFile => {
    const file = fs.readFileSync(readingsFile.filepath, 'utf8');
    const readingsJson = YAML.parse(file) as Reading[];

    readingsJson.forEach(reading => {
      if (uuids.includes(reading.uuid)) {
        throw new Error(
          `Duplicate uuid ${reading.uuid} - of ${reading.title}. File ${readingsFile.filepath}`
        );
      } else {
        uuids.push(reading.uuid);
      }

      if (!every(reading.subTopics, subTopic => subTopics.includes(subTopic))) {
        throw new Error(
          `Unexpected Subtopics ${reading.subTopics} - of ${reading.title}. File ${readingsFile.filepath}`
        );
      }
    });
  });
}
