import {map} from 'rxjs/operators';

import {Frontpage} from '../../types/frontpage';
import {client} from '../../cms-client';

export default function getFrontpage() {
  return client.item<Frontpage>('frontpage')
    .depthParameter(3)
    .getObservable()
    .pipe(map(response => response.item));
}
