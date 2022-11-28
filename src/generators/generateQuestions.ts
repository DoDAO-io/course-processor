import dedent from 'dedent-js';
import fs from 'fs';
import YAML from 'yaml';
import { Question, QuestionChoice } from '../model/Question';
import { writeFileSync } from '../utils/writeFileSync';

const choicesMarkdown = (
  answerKeys: string[],
  choices: QuestionChoice[]
): string => {
  return choices
    .map(choice => {
      // prettier-ignore
      return dedent`- [${answerKeys.includes(choice.key) ? 'x' : ' '}]  ${choice.content}`;
    })
    .join('\n');
};
export function generateQuestions(
  courseDirPath: string,
  topic: string,
  questionsFile: string
) {
  const file = fs.readFileSync(
    `${courseDirPath}/questions/${questionsFile}`,
    'utf8'
  );
  const questionsJson = YAML.parse(file) as Question[];
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');

  const courseReadmeContents = dedent`${header}
    ---
    
    ## ${topic}
    
    ${questionsJson
      .map(question => {
        return dedent`

---

##### ${question.content}  
      
${choicesMarkdown(question.answerKeys, question.choices)}
        
Hint: ${question.hint}
               
Explanation: ${question.explanation}

Sub Topics: ${question.subTopics?.join(', ') || 'No Sub-Topics'}
`;
      })
      .join('\n \n')}
    
   
    `;

  writeFileSync(
    // prettier-ignore
    `${courseDirPath}/../generated/questions/${questionsFile.replace('.yaml', '')}.md`,
    courseReadmeContents
  );
}
