import {Metadata} from './metadata';
import {Model} from './base';

export class Page {
  type: 'page';
  headline: string;
  content: Model[];
  metadata: Metadata;
}