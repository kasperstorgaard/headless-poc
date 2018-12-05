import { ContentItem, Fields } from 'kentico-cloud-delivery';

import { Page } from './page';

export class PickABox extends ContentItem {
    public static codename = 'pick_a_box';

    public sections: Page[];
    public headline: Fields.TextField;
    public name: Fields.TextField;
    public url: Fields.UrlSlugField;
    public description: Fields.TextField;
    public boxes: any[];
}
