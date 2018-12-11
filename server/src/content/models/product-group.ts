import {PageBase} from './base';

export interface ProductGroup extends PageBase {
  url: string;
  products: any[];
  name: string;
  headline: string;
}
