import {Router} from 'express';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {RouteItem, HomeItem} from '../content/resolvers';
import {client} from '../content/cms-client';
import {Route} from '../content/models/route';

export const routes = Router();

routes.get('**', async (_req, res) => {
  const routeTree = await getRouteTree('default').toPromise();
  res.json({routeTree});
})

const localesLookup: {[key:string]: Observable<Route>} = {};

export function getRouteTree(language = 'default', update = false) {
  if (!localesLookup[language] || update) {
    localesLookup[language] = getRootRouteItem(language);
  }
  return localesLookup[language];
}

function getRootRouteItem(language = 'default'): Observable<Route> {
  return client.item<RouteItem>('root_route')
    .languageParameter(language)
    .depthParameter(10)
    .getObservable()
    .pipe(
      map(response => response.item.toModel()),
      shareReplay(1)
    );
}
