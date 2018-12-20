import {map} from 'rxjs/operators';

import {client} from '../cms-client';
import {HomeItem} from '../resolvers';

export default function getHomePage() {
  return client.item<HomeItem>('home')
    .depthParameter(2)
    .getObservable()
    .pipe(map(response => response.item));
}
