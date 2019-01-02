import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {CTA} from '../models/cta';
import {RouteItem} from './route';
import {getUrlSync} from '../../api/navigation';
import {getText} from './utils';

export abstract class CTAItem extends ContentItem {
  ctaTarget: RouteItem[];
  ctaText: Fields.TextField;

  constructor(resolver: (fieldName: string) => string) {
    super({
      propertyResolver: ((fieldName: string) => {
        if (fieldName === 'cta__target') {
          return 'ctaTarget';
        }
        if (fieldName === 'cta__text') {
          return 'ctaText';
        }
        return resolver(fieldName);
      })
    });
  }

  toModel() {
    const target = this.ctaTarget && this.ctaTarget[0];
    const url = target ? getUrlSync(target.system.codename, target.system.language) : '';

    return {
      cta: {
        text: getText(this.ctaText),
        url
      } as CTA
    }
  }
}