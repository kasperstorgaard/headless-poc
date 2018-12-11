import {Page} from './page';
import {PageBase} from './base';

export interface PickABox extends PageBase {
  sections: Page[];
  headline: string;
  name: string;
  url: string;
  description: string;
  boxes: any[];
}
