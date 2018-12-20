import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {Step} from '../models';
import {ContentResolver} from './base';

export class StepItem extends ContentItem
  implements ContentResolver<Step> {
  public static type = 'step';

  public illustrationThumbnail: Fields.AssetsField;
  public headline: Fields.TextField;
  public description: Fields.TextField;
  public image: Fields.AssetsField;
  public summary: Fields.TextField;
  constructor() {
    super({
      propertyResolver: ((fieldName: string) => {
        if (fieldName === 'illustration_thumbnail') {
          return 'illustrationThumbnail';
        }
        return fieldName;
      })
    });
  }

  toModel(): Step {
    const illustrationThumbnail = this.illustrationThumbnail.assets[0];
    const image = this.image.assets[0];
    return {
      type: 'step',
      illustrationThumbnail: illustrationThumbnail ? illustrationThumbnail.url : '',
      headline: this.headline.text,
      description: this.description.text,
      image: image ? image.url : '',
      summary: this.summary.text
    };
  }
}
