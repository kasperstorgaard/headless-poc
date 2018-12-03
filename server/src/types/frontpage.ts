import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {HeroSection} from './hero_section';
import {StepsSection} from './steps_section';

export class Frontpage extends ContentItem {
    public sections: HeroSection|StepsSection[];
    public navigationTitle: Fields.TextField;
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
