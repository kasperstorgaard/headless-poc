import {Promo} from './promo';
import {Steps} from './steps';
import {PageBase} from './base';

export type HomeSection = Promo|Steps;

export interface Home extends PageBase {
  sections: (Promo|Steps)[];
}
