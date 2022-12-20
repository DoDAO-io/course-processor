import { CourseTopics } from './CourseTopics';

export interface Course {
  key: string;
  title: string;
  summary: string;
  details: string;
  courseFailContent?: string;
  coursePassContent?: string;
  coursePassCount?: string;
  duration: string;
  highlights: string[];
  publishStatus: string;
  courseAdmins?: string[];
  thumbnail: string;
  topics: CourseTopics[];
}
