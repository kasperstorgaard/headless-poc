import {Fields} from 'kentico-cloud-delivery';

import {Promo} from '../models';
import {ContentResolver} from './base';
import {CTAItem} from './cta';

export class PromoItem extends CTAItem
  implements ContentResolver<Promo> {
  public static type = 'promo';

  public backgroundImage: Fields.AssetsField;
  public headline: Fields.TextField;
  public name: Fields.TextField;
  public body: Fields.TextField;

  constructor() {
    super((fieldName: string) => {
      if (fieldName === 'background_image') {
        return 'backgroundImage';
      }
      if (fieldName === 'cta_text') {
        return 'ctaText';
      }
      if (fieldName === 'cta_link') {
        return 'ctaLink';
      }
      return fieldName;
    })
  }

  public toModel(): Promo {
    const base = super.toModel();
    const assets = this.backgroundImage && this.backgroundImage.assets || [];

    return {
      ...base,
      type: 'promo',
      backgroundImage: assets.length ? assets[0].url : '',
      headline: this.headline ? this.headline.text : '',
      name: this.name ? this.name.text : '',
      body: this.body ? this.body.text : ''
    };
  }
}
