import {Model} from './base';

export interface Step extends Model {
  illustrationThumbnail: string;
  headline: string;
  description: string;
  image: string;
  summary: string;
}
