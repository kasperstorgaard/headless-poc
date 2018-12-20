import {Metadata} from './metadata';

export class Page {
  type: 'page';
  headline: string;
  content: any[];
  metadata: Metadata;
}