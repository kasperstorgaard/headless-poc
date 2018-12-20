import {PromoSection} from './promo-section';
import {StepsSection} from './steps-section';
import {PageBase} from './base';

export type HomeSection = PromoSection|StepsSection;

export interface Home extends PageBase {
  sections: (PromoSection|StepsSection)[];
}
