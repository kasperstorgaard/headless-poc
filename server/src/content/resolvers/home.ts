import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PromoItem} from './promo';
import {StepsItem} from './steps';
import {Home} from '../models';
import {ContentResolver} from './base';

export class HomeItem extends ContentItem
  implements ContentResolver<Home> {
  static type = 'home';

  sections: (PromoItem | StepsItem)[];
  name: Fields.TextField;

  toModel(): Home {
    return {
      type: 'home',
      navigation: 'page',
      sections: this.sections.map(section => section.toModel())
    };
  }
}
