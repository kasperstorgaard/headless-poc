import { ContentItem, Fields } from 'kentico-cloud-delivery';
import { Product } from './product';

export class ProductGroup extends ContentItem {
    public static codename = 'product_group';

    public url: Fields.UrlSlugField;
    public products: Product[];
    public name: Fields.TextField;
    public headline: Fields.TextField;
}
