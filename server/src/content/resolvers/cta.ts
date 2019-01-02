import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {CTA} from '../models/cta';
import {RouteItem} from './route';
import {getUrlSync} from '../../api/navigation';
import {getText} from './utils';

export abstract class CTAItem extends ContentItem {
  ctaCtaTarget: RouteItem[];
  ctaCtaTitle: Fields.TextField;

  constructor(resolver: (fieldName: string) => string) {
    super({
      propertyResolver: ((fieldName: string) => {
        if (fieldName === 'cta__target') {
          return 'ctaCtaTarget';
        }
        if (fieldName === 'cta__text') {
          return 'ctaCtaText';
        }
        return resolver(fieldName);
      })
    });
  }

  toModel() {
    const target = this.ctaCtaTarget && this.ctaCtaTarget[0];
    const url = target ? getUrlSync(target.system.codename, target.system.language) : '';

    return {
      cta: {
        title: getText(this.ctaCtaTitle),
        url
      } as CTA
    }
  }
}