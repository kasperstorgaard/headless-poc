import { Page } from './page';

export interface PickABox {
  sections: Page[];
  headline: string;
  name: string;
  url: string;
  description: string;
  boxes: any[];
}
