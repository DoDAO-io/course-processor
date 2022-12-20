import { Question } from './Question';
import { Reading } from './Reading';
import { Summary } from './Summary';

export interface CourseTopicJson {
  title: string;
  key: string;
  details: string;
  order: number;
  questions: Question[];
  readings: Reading[];
  summaries: Summary[];
}

export interface CourseJson {
  key: string;
  title: string;
  summary: string;
  details: string;
  courseFailContent?: string;
  coursePassContent?: string;
  coursePassCount?: number;
  duration: string;
  highlights: string[];
  publishStatus: string;
  thumbnail: string;
  courseAdmins?: string[];
  topics: CourseTopicJson[];
}
