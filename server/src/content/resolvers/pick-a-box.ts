import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PickABox} from '../models';
import {PageItem} from './page';

export class PickABoxItem extends ContentItem {
  static type = 'pick_a_box';

  sections: PageItem[];
  headline: Fields.TextField;
  name: Fields.TextField;
  url: Fields.UrlSlugField;
  description: Fields.TextField;
  boxes: any[];

  toJSON(): PickABox {
    return {
      sections: (this.sections || []).map(section => section.toJSON()),
      headline: this.headline ? this.headline.text : '',
      name: this.name ? this.name.text : '',
      url: this.url ? this.url.getUrl() : '',
      description: this.description ? this.description.text : '',
      boxes: this.boxes.map(box => box.toJSON())
    }
  }
}