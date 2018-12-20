import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PageItem} from './page';
import {Route} from '../models/route';
import {HomeItem} from './home';

export class RouteItem extends ContentItem {
  static type = 'route';

  name: Fields.TextField;
  routes: RouteItem[];
  page: PageItem[];

  toModel(): Route {
    return {
      name: this.name.text,
      codename: this.system.codename,
      url: getUrl(this),
      routes: this.routes.map(subroute => subroute.toModel())
    }
  }
}

function getUrl(route: RouteItem): string {
  const page = route.page[0];
  return page instanceof HomeItem ? '/' : page.url.value;
}
