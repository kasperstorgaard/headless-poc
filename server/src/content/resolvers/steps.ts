import {Fields} from 'kentico-cloud-delivery';

import {Steps} from '../models';
import {StepItem} from './step';
import {ContentResolver} from './base';
import {CTAItem} from './cta';

export class StepsItem extends CTAItem
  implements ContentResolver<Steps> {
  static type = 'steps';

  name: Fields.TextField;
  headline: Fields.TextField;
  steps: StepItem[];

  constructor() {
    super((fieldName: string) => {
      if (fieldName === 'cta_link') {
        return 'ctaLink';
      }
      if (fieldName === 'cta_text') {
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
      headline: this.headline.text,
      name: this.name.text,
      steps: this.steps.map(step => step.toModel())
    }
  }
}
