import {map} from 'rxjs/operators';

import {ProductGroup} from '../models';
import {client} from '../cms-client';

export default function getProductsPage() {
  return client.item<ProductGroup>('products')
    .depthParameter(2)
    .getObservable()
    .pipe( map(response => response.item));
}
