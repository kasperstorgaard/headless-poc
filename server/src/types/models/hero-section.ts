import {ContentItem, Fields} from 'kentico-cloud-delivery';

import { Page } from './page';

export class HeroSection extends ContentItem {
    public static codename = 'hero_section';

    public backgroundImage: Fields.AssetsField;
    public ctaText: Fields.TextField;
    public headline: Fields.TextField;
    public body: Fields.TextField;
    public ctaLink: Page[];
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
}
