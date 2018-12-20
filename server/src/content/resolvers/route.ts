import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PageItem} from './page';
import {Route} from '../models/route';
import {Nav} from '../models/nav';

export class RouteItem extends ContentItem {
  static type = 'route';

  url: Fields.UrlSlugField;
  name: Fields.TextField;
  routes: RouteItem[];
  page: PageItem[];
  options: Fields.MultipleChoiceField;

  toModel(parent?: Route): Route {
    const page = this.pages && this.pages.length ? getPage(this.pages[0]) : null;

    const route = {
      name: this.name.text,
      codename: this.system.codename,
      url: getUrl(this, parent),
      routes: [],
      page
    } as Route;

    return { ...route, routes: this.routes.map(subroute => subroute.toModel(route)) };
  }

  toNav(parent?: Route): Nav {
    const model = this.toModel(parent);
    
    return {
      name: model.name,
      hideFromMenu: getHideFromMenu(this),
      codename: model.codename,
      url: model.url,
      routes: this.routes.map(subroute => subroute.toNav(model))
    };
  }
}

function getPage(page: PageItem) {
  return page && page.toModel || page;
}

function getUrl(route: RouteItem, parent?: Route|Nav): string {
  const url = route.url.value;
  return (parent && parent.url || '') + url;
}

function getHideFromMenu(route: RouteItem) {
  const checkbox = route.options.options.find(option => option.codename === 'hide_from_menu');
  return !!checkbox;
}
