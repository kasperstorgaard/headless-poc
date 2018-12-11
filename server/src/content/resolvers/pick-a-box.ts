import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PickABox} from '../models';
import {getLocalUrl} from '../navigation';
import {PageItem} from './page';
import {ContentResolver} from './base';

export class PickABoxItem extends ContentItem
  implements ContentResolver<PickABox> {
  static type = 'pick_a_box';

  sections: PageItem[];
  headline: Fields.TextField;
  name: Fields.TextField;
  url: Fields.UrlSlugField;
  description: Fields.TextField;
  boxes: any[];

  constructor() {
    super({
      linkResolver: (link) => {
        return `/${getLocalUrl('products')}/${link.urlSlug}`;
      }
    })
  }

  toModel(): PickABox {
    return {
      type: 'pick_a_box',
      navigation: 'subpage',
      sections: (this.sections || []).map(section => section.toModel()),
      headline: this.headline ? this.headline.text : '',
      name: this.name ? this.name.text : '',
      url: this.url ? this.url.getUrl() : '',
      description: this.description ? this.description.text : '',
      boxes: this.boxes.map(box => box.toModel())
    }
  }
}
