import { Course } from '../model/Course';
import { readQuestions } from './../readers/readQuestions';
import { readReadings } from './../readers/readReadings';
import { readSummaries } from './../readers/readSummaries';
import { readExplanations } from './../readers/readExplanations';
import { CourseJson, CourseTopicJson } from './../model/CourseJson';

export function getCoursesJson(
  courseDirPath: string,
  courseJson: Course
): CourseJson {
  let topicsList: CourseTopicJson[] = courseJson.topics.map((topic, index) => ({
    title: topic.title,
    key: topic.key,
    summary: topic.summary,
    details: topic.details,
    order: index,
    explanations: topic.explanations
      ? readExplanations(courseDirPath, topic.explanations)
      : [],
    questions: topic.questions
      ? readQuestions(courseDirPath, topic.questions).map(question => {
          if (!Array.isArray(question.answerKeys)) {
            throw Error(
              `Answer Keys of question: ${question.content} is not an array`
            );
          }
          return {
            ...question,
            choices: question.choices.map(choice => ({
              ...choice,
              content: choice.content.toString(),
            })),
          };
        })
      : [],
    readings: topic.readings ? readReadings(courseDirPath, topic.readings) : [],
    summaries: topic.summaries
      ? readSummaries(courseDirPath, topic.summaries)
      : [],
  }));

  const course: CourseJson = {
    key: courseJson.key,
    title: courseJson.title,
    summary: courseJson.summary,
    details: courseJson.details,
    duration: courseJson.duration,
    highlights: courseJson.highlights,
    publishStatus: courseJson.publishStatus,
    thumbnail: courseJson.thumbnail,
    courseAdmins: courseJson.courseAdmins || [],
    courseFailContent: courseJson.courseFailContent,
    coursePassContent: courseJson.coursePassContent,
    coursePassCount: courseJson.coursePassCount?.trim()
      ? parseInt(courseJson.coursePassCount)
      : undefined,
    topics: topicsList,
  };

  return course;
}
