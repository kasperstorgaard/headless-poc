import {forkJoin, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {ProductsPage, Frontpage, Page} from '../types';
import getFrontpage from './pages/frontpage';
import getProductsPage from './pages/products-page';

export interface NavigationItem {
  name: string;
  url: string;
  items: NavigationItem[];
}

let navigation$: Observable<NavigationItem[]>;

export function getNavigation(): Observable<NavigationItem[]> {
  if (!navigation$) {
    navigation$ = forkJoin([
      getFrontpage(),
      getProductsPage()
    ])
    .pipe(map(pages => pages.map(page => buildNavigationItem(page))));
  }

  return navigation$;
}

function buildNavigationItem(page: Page): NavigationItem {
  const name = page.navigationTitle ? page.navigationTitle.text : '';
  let url = '';
  let items: NavigationItem[] = [];

  if (!(page instanceof Frontpage)) {
    url = page.url.value;
    items = getSubPages(page).map(subPage => buildNavigationItem(subPage));
  }

  return {url, name, items};
}

function getSubPages(page: Page) {
  if (page instanceof ProductsPage) {
    return page.products;
  }

  return [];
}