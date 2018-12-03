import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {StepsSection} from './steps_section';
import {HeroSection} from './hero_section';

export class ProductPage extends ContentItem {
    public sections: HeroSection|StepsSection[];
    public headline: Fields.TextField;
    public navigationTitle: Fields.TextField;
    public url: Fields.UrlSlugField;
    public description: Fields.TextField;
    public boxes: ContentItem[];
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'navigation_title') {
                    return 'navigationTitle';
                }
                return fieldName;
            })
        });
    }
}
