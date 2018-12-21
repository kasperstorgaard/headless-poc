import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {Step} from '../models';
import {ContentResolver} from './base';
import {getText, getImageUrl} from './utils';

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
    return {
      type: 'step',
      illustrationThumbnail: getImageUrl(this.illustrationThumbnail),
      headline: getText(this.headline),
      description: getText(this.description),
      image: getImageUrl(this.image),
      summary: getText(this.summary)
    };
  }
}
