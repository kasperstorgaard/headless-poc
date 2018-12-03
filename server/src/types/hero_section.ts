import {ContentItem, Fields} from 'kentico-cloud-delivery';

export class HeroSection extends ContentItem {
    public backgroundImage: Fields.AssetsField;
    public ctaText: Fields.TextField;
    public headline: Fields.TextField;
    public body: Fields.TextField;
    public ctaLink: ContentItem[];
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
