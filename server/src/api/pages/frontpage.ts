import {map} from 'rxjs/operators';

import {Frontpage} from '../../types/models';
import {client} from '../cms-client';

export default function getFrontpage() {
  return client.item<Frontpage>('frontpage')
    .depthParameter(2)
    .getObservable()
    .pipe(map(response => response.item));
}