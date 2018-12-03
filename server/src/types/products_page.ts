
import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {ProductPage} from './product_page';

export class ProductsPage extends ContentItem {
    public url: Fields.UrlSlugField;
    public products: ProductPage[];
    public navigationTitle: Fields.TextField;
    public headline: Fields.TextField;
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
