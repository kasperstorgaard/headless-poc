import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {HeroSection} from './hero-section';
import {StepsSection} from './steps-section';

export class Frontpage extends ContentItem {
    public static codename = 'frontpage';

    public sections: (HeroSection|StepsSection)[];
    public name: Fields.TextField;

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
