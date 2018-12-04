import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {HeroSection} from './hero-section';
import {StepsSection} from './steps-section';

export class Home extends ContentItem {
    public static codename = 'home';

    public sections: (HeroSection|StepsSection)[];
    public name: Fields.TextField;
}
