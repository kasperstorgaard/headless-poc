import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PromoSectionItem} from './promo-section';
import {StepsSectionItem} from './steps-section';
import {Home} from '../models';
import { ContentResolver } from './base';

export class HomeItem extends ContentItem
  implements ContentResolver<Home> {
  static type = 'home';

  sections: (PromoSectionItem | StepsSectionItem)[];
  name: Fields.TextField;

  toModel(): Home {
    return {
      type: 'home',
      navigation: 'page',
      sections: this.sections.map(section => section.toModel())
    };
  }
}
