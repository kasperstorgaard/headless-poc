import {map} from 'rxjs/operators';

import {Frontpage} from '../../types/frontpage';
import {client} from '../../cms-client';

export default function getFrontpage() {
  return client.items<Frontpage>()
    .type('frontpage')
    .getObservable()
    .pipe(map(response => response.items[0]));
}
