import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {StepItem} from './step';
import {StepsSection} from '../models';

export class StepsSectionItem extends ContentItem {
  static type = 'steps_section';

  name: Fields.TextField;
  ctaLink: ContentItem[];
  ctaText: Fields.TextField;
  headline: Fields.TextField;
  steps: StepItem[];

  constructor() {
    super({
      propertyResolver: ((fieldName: string) => {
        if (fieldName === 'cta_link') {
          return 'ctaLink';
        }
        if (fieldName === 'cta_text') {
          return 'ctaText';
        }
        return fieldName;
      })
    });
  }

  toJSON(): StepsSection {
    const ctaLink = this.ctaLink[0];

    return {
      headline: this.headline.text,
      name: this.name.text,
      steps: this.steps.map(step => step.toJSON()),
      cta: {
        url: ctaLink && ctaLink.url || '',
        text: this.ctaText.text
      }
    }
  }
}
