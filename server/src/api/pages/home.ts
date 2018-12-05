import {map, switchMap} from 'rxjs/operators';

import {Home} from '../../types/models';
import {client} from '../cms-client';
import { of, forkJoin } from 'rxjs';
import { getUrlSegments } from '../navigation';
import { ContentItem } from 'kentico-cloud-delivery';

export default function getHomePage() {
  return client.item<Home>('home')
    .depthParameter(2)
    .getObservable()
    .pipe(
      map(response => response.item),
      switchMap(item => {
        const sections$ = item.sections.map(section => addFullUrl(section));

        return forkJoin(sections$).pipe(map(sections => ({
          ...item,
          sections
        })));
      })
    );
}

function addFullUrl(item: any) {
  if (!item || !item.ctaLink) {
    return of(item);
  }

  const link: ContentItem = item.ctaLink[0];

  if (!link) {
    return of(item);
  }

  return getUrlSegments(link).pipe(map(segments => ({
    ...item,
    fullUrl: `/${segments.join('/')}`
  })));
}
