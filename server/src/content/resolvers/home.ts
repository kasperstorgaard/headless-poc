import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PromoSectionItem} from './promo-section';
import {StepsSectionItem} from './steps-section';
import {Home} from '../models';

export class HomeItem extends ContentItem {
  static type = 'home';

  sections: (PromoSectionItem | StepsSectionItem)[];
  name: Fields.TextField;

  toJSON(): Home {
    return {
      sections: this.sections.map(section => section.toJSON())
    };
  }
}
