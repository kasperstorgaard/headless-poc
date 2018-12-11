import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {ProductGroup} from '../models';
import {getLocalUrl} from '../navigation';
import {ContentResolver} from './base';

export class ProductGroupItem extends ContentItem
  implements ContentResolver<ProductGroup> {
  static type = 'product_group';

  url: Fields.UrlSlugField;
  products: any[];
  name: Fields.TextField;
  headline: Fields.TextField;
  navigation: Fields.TaxonomyField;

  constructor() {
    super({
      linkResolver: () => getLocalUrl('products')
    })
  }

  toModel(): ProductGroup {
    return {
      type: 'productGroup',
      navigation: 'subpage',
      url: this.url ? this.url.getUrl() : '',
      products: (this.products || []).map(product => product.toModel()),
      name: this.name ? this.name.text : '',
      headline: this.headline ? this.headline.text : ''
    }
  }
}
