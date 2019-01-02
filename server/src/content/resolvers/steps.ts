import {Fields} from 'kentico-cloud-delivery';

import {Steps} from '../models';
import {StepItem} from './step';
import {ContentResolver} from './base';
import {CTAItem} from './cta';
import {getText} from './utils';

export class StepsItem extends CTAItem
  implements ContentResolver<Steps> {
  static type = 'steps';

  name: Fields.TextField;
  headline: Fields.TextField;
  items: StepItem[];

  constructor() {
    super((fieldName: string) => {
      if (fieldName === 'cta__link') {
        return 'ctaLink';
      }
      if (fieldName === 'cta__text') {
        return 'ctaText';
      }
      return fieldName;
    });
  }

  toModel(): Steps {
    const base = super.toModel();

    return {
      ...base,
      type: 'steps',
      headline: getText(this.headline),
      items: this.items.map(item => item.toModel())
    }
  }
}
