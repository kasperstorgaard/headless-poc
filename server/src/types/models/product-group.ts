import { ContentItem, Fields } from 'kentico-cloud-delivery';

export class ProductGroup extends ContentItem {
    public static codename = 'product_group';

    public url: Fields.UrlSlugField;
    public products: any[];
    public name: Fields.TextField;
    public headline: Fields.TextField;
}
