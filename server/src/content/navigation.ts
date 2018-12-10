import {ContentItem, Fields} from 'kentico-cloud-delivery';
import {Observable, Subject, merge} from 'rxjs';
import {map, mergeMap} from 'rxjs/operators';

import {client} from './cms-client';

const navigation: {[key: string]: {[key: string]: string}} = {};

const rootPages = [
  'home',
  'products'
];

const updates$ = new Subject<string>();

updates$.pipe(mergeMap(language =>
  getRootPages(language).pipe(map(item => ({language, item})))
)).subscribe(({item, language}) => {
  const codename = item.system.codename;
  const url: Fields.UrlSlugField = (item as any).url;
  const lookup = navigation[language] = navigation[language] || {};
  lookup[codename] = url && url.value || null;
});

export function getLocalUrl(codename: string, language = 'default') {
  const lookup = navigation[language];
  return lookup && lookup[codename] || null;
}

export function getRootPages(language = 'default'): Observable<ContentItem> {
    return merge(...rootPages.map(page =>
      client.item<ContentItem>(page)
        .languageParameter(language)
        .depthParameter(1)
        .queryConfig({ throwErrorForMissingLinkedItems: false })
        .getObservable()
        .pipe(map(response => response.item))
    ));
}

export function updateNavigation(language = 'default') {
  updates$.next(language);
}