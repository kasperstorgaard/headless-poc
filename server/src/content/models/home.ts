import {PromoSection} from './promo-section';
import {StepsSection} from './steps-section';

export type HomeSection = PromoSection|StepsSection;

export interface Home {
  sections: (PromoSection|StepsSection)[];
}
