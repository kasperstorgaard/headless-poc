import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PageItem} from './page';
import {Route} from '../models/route';
import {HomeItem} from './home';

export class RouteItem extends ContentItem {
  static type = 'route';

  name: Fields.TextField;
  routes: RouteItem[];
  page: PageItem[];

  toModel(parent?: Route): Route {
    const route = {
      name: this.name.text,
      codename: this.system.codename,
      url: getUrl(this, parent),
      routes: []
    } as Route;

    return { ...route, routes: this.routes.map(subroute => subroute.toModel(route)) };
  }
}

function getUrl(route: RouteItem, parent?: Route): string {
  const page = route.page[0];
  const url = page instanceof HomeItem ? '' : page.url.value;
  if (!parent) {
    return url ? url : '/';
  } else {
    return parent.url + url;
  }
}
