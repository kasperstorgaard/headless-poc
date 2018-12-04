import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ProductGroup, Home, Page} from '../types';
import getHomePage from './pages/home';
import getProductsPage from './pages/products';

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

function buildNavigationItem(page: Page): NavigationItem {
  const name = page.name ? page.name.text : '';
  let url = '/';
  let items: NavigationItem[] = [];

  if (!(page instanceof Home)) {
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