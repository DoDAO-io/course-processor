import { CourseTopics } from './CourseTopics';

export interface Course {
  key: string;
  title: string;
  summary: string;
  details: string;
  duration: string;
  highlights: string[];
  publishStatus: string;
  courseAdmins?: string[];
  thumbnail: string;
  topics: CourseTopics[];
}
