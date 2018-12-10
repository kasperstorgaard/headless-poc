import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PromoSection} from '../models';

export class PromoSectionItem extends ContentItem {
  public static type = 'promo';

  public backgroundImage: Fields.AssetsField;
  public ctaText: Fields.TextField;
  public headline: Fields.TextField;
  public name: Fields.TextField;
  public body: Fields.TextField;
  public ctaLink: ContentItem[];

  constructor() {
    super({
      propertyResolver: ((fieldName: string) => {
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
    });
  }

  public toJSON(): PromoSection {
    const ctaLink = this.ctaLink[0];
    const assets = this.backgroundImage && this.backgroundImage.assets || [];

    return {
      cta: {
        url: ctaLink ? ctaLink.url : '',
        text: this.ctaText.text
      },
      backgroundImage: assets.length ? assets[0].url : '',
      headline: this.headline ? this.headline.text : '',
      name: this.name ? this.name.text : '',
      body: this.body ? this.body.text : ''
    };
  }
}