import {ContentItem, Fields} from 'kentico-cloud-delivery';
import {ProductGroup} from '../models';

export class ProductGroupItem extends ContentItem {
  static type = 'product_group';

  url: Fields.UrlSlugField;
  products: any[];
  name: Fields.TextField;
  headline: Fields.TextField;
  navigation: Fields.TaxonomyField;

  toJSON(): ProductGroup {
    return {
      url: this.url ? this.url.getUrl() : '',
      products: (this.products || []).map(product => product.toJSON()),
      name: this.name ? this.name.text : '',
      headline: this.headline ? this.headline.text : '',
      navigation: this.navigation ? this.navigation.taxonomyTerms[0].name : ''
    }
  }
}
