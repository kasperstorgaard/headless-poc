import {map, shareReplay, catchError} from 'rxjs/operators';
import {Observable} from 'rxjs';

import {ProductGroup} from '../../types';
import {client} from '../cms-client';

let item: Observable<ProductGroup>;

export default function getProductsPage() {
  if (!item) {
    item = client.item<ProductGroup>('products')
      .depthParameter(2)
      .getObservable()
      .pipe(
        map(response => response.item),
        shareReplay(1)
      );
  }

  return item;
}
