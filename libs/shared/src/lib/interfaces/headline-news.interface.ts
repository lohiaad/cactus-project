import { News } from './news.interface';

export interface HeadlineNews extends News {
  imageUrl: string;
  shortDesc: string;
}
