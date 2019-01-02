import {Fields} from 'kentico-cloud-delivery';

import {Promo} from '../models';
import {ContentResolver} from './base';
import {CTAItem} from './cta';
import {getText, getImageUrl} from './utils';

export class PromoItem extends CTAItem
  implements ContentResolver<Promo> {
  public static type = 'promo';

  public backgroundImage: Fields.AssetsField;
  public headline: Fields.TextField;
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

    return {
      ...base,
      type: 'promo',
      backgroundImage: getImageUrl(this.backgroundImage),
      headline: getText(this.headline),
      body: getText(this.body)
    };
  }
}
