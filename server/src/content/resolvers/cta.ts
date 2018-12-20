import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {CTA} from '../models/cta';
import {RouteItem} from './route';
import {getUrlSync} from '../../api/navigation';

export abstract class CTAItem extends ContentItem {
  ctaCtaTarget: RouteItem[];
  ctaCtaTitle: Fields.TextField;

  constructor(resolver: (fieldName: string) => string) {
    super({
      propertyResolver: ((fieldName: string) => {
        if (fieldName === 'cta__cta_target') {
          return 'ctaCtaTarget';
        }
        if (fieldName === 'cta__cta_title') {
          return 'ctaCtaTitle';
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
        title: this.ctaCtaTitle.text,
        url
      } as CTA
    }
  }
}