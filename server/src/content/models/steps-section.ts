import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {Step} from './step';

export class StepsSection extends ContentItem {
    public static type = 'steps_section';

    public name: Fields.TextField;
    public ctaLink: ContentItem[];
    public ctaText: Fields.TextField;
    public headline: Fields.TextField;
    public steps: Step[];
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
}
