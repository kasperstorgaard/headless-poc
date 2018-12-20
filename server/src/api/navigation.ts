import {Router} from 'express';
import {Observable, Subject, of, ReplaySubject} from 'rxjs';
import {map, shareReplay, switchMap, tap, takeUntil, filter} from 'rxjs/operators';

import {RouteItem} from '../content/resolvers';
import {client} from '../content/cms-client';
import {Nav} from '../content/models/nav';

export const routes = Router();

routes.get('**', async (_req, res) => {
  console.log('--- before ---');
  const routeTree = await getRouteTree('default').toPromise()
  console.log('--- after ---');
  res.json({routeTree});
})

const navLookup: {[key: string]: Nav|null} = {};

export function getRouteTree(language = 'default', forceUpdate = false) {
  const update = !navLookup[language] || forceUpdate;

  if (!navLookup[language]) {
    navLookup[language] = null;
  }

  if (update) {
    return getRootRouteItem(language)
      .pipe(tap(value => navLookup[language] = value));
  }

  return of(navLookup[language]);
}

export function getUrl(codename: string, language?: string): Observable<string|null> {
  return getRouteTree(language)
    .pipe(map(nav => getItemUrl(nav, codename)));
}

export function getUrlSync(codename: string, language?: string) {
  const nav = navLookup[language];
  return getItemUrl(nav, codename);
}

export function warmup(languages: string[]) {
  return Promise.all(languages.map(language => getRouteTree(language).toPromise()));
}

function getItemUrl(nav: Nav, codename: string): string|null {
  const item = findItem(nav, codename);
  return item ? item.url : null;
}

function findItem(nav: Nav|null, codename: string): Nav|null {
  if (!nav) {
    return null;
  }

  if (nav.codename === codename) {
    return nav;
  }

  return (nav.routes || [])
    .map(route => findItem(route, codename))
    .find(subNav => subNav != null);
}

function getRootRouteItem(language = 'default'): Observable<Nav> {
  return client.item<RouteItem>('root_route')
    .languageParameter(language)
    .depthParameter(10)
    .getObservable()
    .pipe(
      map(response => response.item.toNav()),
      shareReplay(1)
    );
}
