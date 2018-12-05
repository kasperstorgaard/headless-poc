import {forkJoin, Observable, of} from 'rxjs';

import {ProductGroup, Home, Page, PickABox} from '../types';
import getHomePage from './pages/home';
import getProductsPage from './pages/products';
import {map} from 'rxjs/operators';

export interface NavigationItem {
  name: string;
  url: string;
  items: NavigationItem[];
}

let navigation$: Observable<NavigationItem[]>;

export function getNavigation(): Observable<NavigationItem[]> {
  if (!navigation$) {
    navigation$ = forkJoin([
      getHomePage(),
      getProductsPage()
    ])
    .pipe(map(pages => pages.map(page => buildNavigationItem(page))));
  }

  return navigation$;
}

export function getUrlSegments(classOrInstance: any): Observable<string[]> {
  if (classOrInstance === Home || classOrInstance instanceof Home) {
    return of(['/']);
  }

  if (classOrInstance === ProductGroup || classOrInstance instanceof ProductGroup) {
    return getProductsPage()
      .pipe(map(products => [products.url.value]));
  }

  if (classOrInstance instanceof PickABox) {
    return getUrlSegments(ProductGroup)
      .pipe(map(segments => segments.concat([classOrInstance.url.value])));
  }
}

function buildNavigationItem(page: Page): NavigationItem {
  const name = page.name ? page.name.text : '';
  let url = '/';
  let items: NavigationItem[] = [];

  if (!(page instanceof Home) && page.url) {
    url = page.url.value;
    items = getSubPages(page).map(subPage => buildNavigationItem(subPage));
  }

  return {url, name, items};
}

function getSubPages(page: Page) {
  if (page instanceof ProductGroup) {
    return page.products;
  }

  return [];
}