import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {StepsSection} from '../models';
import {StepItem} from './step';
import {PageItem} from './page';
import {ContentResolver} from './base';

export class StepsSectionItem extends ContentItem
  implements ContentResolver<StepsSection> {
  static type = 'steps_section';

  name: Fields.TextField;
  ctaLink: PageItem[];
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

  toModel(): StepsSection {
    const ctaItem = this.ctaLink[0].toModel();

    return {
      type: 'stepsSection',
      headline: this.headline.text,
      name: this.name.text,
      steps: this.steps.map(step => step.toModel()),
      cta: {
        url: ctaItem ? ctaItem.url : '',
        text: this.ctaText.text
      }
    }
  }
}
