import dedent from 'dedent-js';
import fs from 'fs';
import { Explanation } from '../model/Explanation';
import YAML from 'yaml';
import { writeFileSync } from '../utils/writeFileSync';

export function generateExplanations(
  courseDirPath: string,
  topic: string,
  explanationFile: string
) {
  const file = fs.readFileSync(
    `${courseDirPath}/explanations/${explanationFile}`,
    'utf8'
  );
  const summariesJson = YAML.parse(file) as Explanation[];
  const header = fs.readFileSync(`${courseDirPath}/course-header.md`, 'utf8');

  const courseReadmeContents = dedent`${header}
    ---
    
    ## ${topic}
    
    ${summariesJson
      .map(explanation => {
        return dedent`
        **${explanation.title}**        
        ${explanation.details} 
      `;
      })
      .join('\n ')}
    
   
    `;

  writeFileSync(
    // prettier-ignore
    `${courseDirPath}/../generated/explanations/${explanationFile.replace('.yaml', '')}.md`,
    courseReadmeContents
  );
}
