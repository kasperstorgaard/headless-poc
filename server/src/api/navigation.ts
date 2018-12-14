import {Router} from 'express';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {Route, HomeItem} from '../content/resolvers';
import {client} from '../content/cms-client';

export const routes = Router();

routes.get('**', async (_req, res) => {
  const routeTree = await getRouteTree('default').toPromise();
  res.json({routeTree});
})

const localesLookup: {[key:string]: Observable<RouteTree>} = {};

export function getRouteTree(language = 'default', update = false) {
  if (!localesLookup[language] || update) {
    localesLookup[language] = getRootRouteItem(language);
  }
  return localesLookup[language];
}

function getRootRouteItem(language = 'default'): Observable<RouteTree> {
  return client.item<Route>('root_route')
    .languageParameter(language)
    .depthParameter(10)
    .getObservable()
    .pipe(
      map(response => buildRouteTree(response.item)),
      shareReplay(1)
    );
}

function buildRouteTree(route: Route): RouteTree {
  const page = route.page[0];
  const url = page instanceof HomeItem ? '' : page.url.value;

  return {
    codename: route.system.codename,
    url,
    routes: route.routes.map(subroute => buildRouteTree(subroute))
  }
}

export interface RouteTree {
    codename: string;
    url: string;
    routes: RouteTree[]
}