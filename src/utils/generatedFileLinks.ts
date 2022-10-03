import { CourseTopics } from './../model/CourseTopics';
import { yamlToMarkdownExtension } from './../utils/yamlToMarkdownExtension';

export function generatedFileLinks(topic: CourseTopics, relativePath = '') {
  let explanationsLink = '';
  if (topic.explanations) {
    // prettier-ignore
    explanationsLink = `[Explanations](${relativePath}generated/explanations/${yamlToMarkdownExtension(topic.explanations)}`;
  }

  let questionsLink = '';
  if (topic.questions) {
    // prettier-ignore
    questionsLink = `[Questions](${relativePath}generated/questions/${yamlToMarkdownExtension(topic.questions)}`;
  }

  let readingsLink = '';
  if (topic.readings) {
    // prettier-ignore
    readingsLink = `[Reading List](${relativePath}generated/readings/${yamlToMarkdownExtension(topic.readings)}`;
  }

  let summariesLink = '';
  if (topic.summaries) {
    // prettier-ignore
    summariesLink = `[Summary](${relativePath}generated/summaries/${yamlToMarkdownExtension(topic.summaries)}`;
  }

  return {
    explanationsLink,
    questionsLink,
    readingsLink,
    summariesLink,
  };
}
