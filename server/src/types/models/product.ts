import { ContentItem, Fields } from 'kentico-cloud-delivery';

import { Page } from './page';

export class Product extends ContentItem {
    public static codename = 'product';

    public sections: Page[];
    public headline: Fields.TextField;
    public name: Fields.TextField;
    public url: Fields.UrlSlugField;
    public description: Fields.TextField;
    public boxes: ContentItem[];
}
