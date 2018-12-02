
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Sun Dec 02 2018 15:23:43 GMT+0100 (CET).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
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
