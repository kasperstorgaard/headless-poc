import {map} from 'rxjs/operators';

import {client} from '../cms-client';
import {ProductGroupItem} from '../resolvers';

export default function getProductsPage() {
  return client.item<ProductGroupItem>('products')
    .depthParameter(2)
    .getObservable()
    .pipe(map(response => response.item.toJSON()));
}
