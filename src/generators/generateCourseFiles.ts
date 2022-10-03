import dedent from 'dedent-js';
import fs from 'fs';
import YAML from 'yaml';
import { Course } from '../model/Course';
import { getCoursesJson } from '../utils/getCoursesJson';
import { writeFileSync } from '../utils/writeFileSync';
import { CourseJson } from './../model/CourseJson';
import { generateExplanations } from './generateExplanations';
import { generateQuestions } from './generateQuestions';
import { generateReadings } from './generateReadings';
import { generateSummaries } from './generateSummaries';
import { generateTopicDetails } from './generateTopicDetails';
import { generatedFileLinks } from './../utils/generatedFileLinks';

function generateCourseTopicsTable(
  courseDirPath: string,
  courseJson: Course,
  courseJsonObject: CourseJson
) {
  return courseJson.topics
    .map((topic, index) => {
      if (topic.explanations) {
        generateExplanations(courseDirPath, topic.title, topic.explanations);
      }

      if (topic.questions) {
        generateQuestions(courseDirPath, topic.title, topic.questions);
      }

      if (topic.readings) {
        generateReadings(courseDirPath, topic.title, topic.readings);
      }

      if (topic.summaries) {
        generateSummaries(courseDirPath, topic.title, topic.summaries);
      }

      const {
        explanationsLink,
        questionsLink,
        readingsLink,
        summariesLink,
      } = generatedFileLinks(topic);

      const contentsString = courseJsonObject.topics
        .find(courseTopic => courseTopic.key === topic.key)!
        .summaries.map(summary => `* ${summary.title}`)
        .join('<br/> ');

      generateTopicDetails(courseDirPath, topic);

      const topicDetailsFileLink = `[Details](generated/topics/${topic.key}.md)`;
      // prettier-ignore
      return `| ${index + 1}      | ${topic.title} | ${contentsString}| ${topicDetailsFileLink} <br/> ${explanationsLink} <br/> ${summariesLink} <br/> ${readingsLink} <br/> ${questionsLink} | ${topic.status} | ${topic.completionWeek} |`
    })
    .join('\n ');
}

function generateCourseTable(
  header: string,
  courseDirPath: string,
  courseJson: Course,
  courseJsonObject: CourseJson
) {
  // prettier-ignore
  const courseReadmeContents =
    dedent`${header}
    ---

    ## ${courseJson.title}
    ${courseJson.summary}
    
    ## Description
    ${courseJson.details}
    
    ## Chapters
    
    | S.No        | Title       | Contents   | Links      | Status      | Completion Week |
    | ----------- | ----------- |----------- |----------- | ----------- | ----------- |
    ${(generateCourseTopicsTable(courseDirPath, courseJson, courseJsonObject))} 
   
    `;

  writeFileSync(`${courseDirPath}/../README.md`, courseReadmeContents);
}

function createDirectoriesIfNotExists(courseDirPath: string) {
  const generatedFolder = `${courseDirPath}/../generated`;
  const explanationsFolder = `${courseDirPath}/../generated/explanations`;
  const questionsFolder = `${courseDirPath}/../generated/questions`;
  const readingsFolder = `${courseDirPath}/../generated/readings`;
  const summariesFolder = `${courseDirPath}/../generated/summaries`;
  const topicsFolder = `${courseDirPath}/../generated/topics`;

  const foldersToGenerate = [
    generatedFolder,
    explanationsFolder,
    questionsFolder,
    readingsFolder,
    summariesFolder,
    topicsFolder,
  ];

  foldersToGenerate.forEach(folder => {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  });
}

export function generateCourseFiles(courseDirPath: string) {
  const courseFile = fs.readFileSync(`${courseDirPath}/course.yaml`, 'utf8');
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');
  const course = YAML.parse(courseFile) as Course;

  createDirectoriesIfNotExists(courseDirPath);

  const courseJsonObject = getCoursesJson(courseDirPath, course);

  generateCourseTable(header, courseDirPath, course, courseJsonObject);

  writeFileSync(
    `${courseDirPath}/../generated/course.json`,
    JSON.stringify(courseJsonObject, null, 2)
  );
}
