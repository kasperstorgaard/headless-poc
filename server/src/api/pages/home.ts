import {map} from 'rxjs/operators';

import {Home} from '../../types/models';
import {client} from '../cms-client';

export default function getHomePage() {
  return client.item<Home>('home')
    .depthParameter(2)
    .getObservable()
    .pipe(map(response => response.item));
}
