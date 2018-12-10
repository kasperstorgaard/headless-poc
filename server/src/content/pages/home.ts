import {map} from 'rxjs/operators';

import {client} from '../cms-client';
import {Home} from '../models';

export default function getHomePage() {
  return client.item<Home>('home')
    .depthParameter(2)
    .getObservable()
    .pipe(map(response => response.item));
}

// function addFullUrl(item: any) {
//   if (!item || !item.ctaLink) {
//     return of(item);
//   }

//   const link: ContentItem = item.ctaLink[0];

//   if (!link) {
//     return of(item);
//   }

//   return getUrlSegments(link).pipe(map(segments => ({
//     ...item,
//     fullUrl: `/${segments.join('/')}`
//   })));
// }
