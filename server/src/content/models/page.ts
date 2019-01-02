import {Metadata} from './metadata';
import {Model} from './base';

export class Page {
  type: 'page';
  content: Model[];
  metadata: Metadata;
}