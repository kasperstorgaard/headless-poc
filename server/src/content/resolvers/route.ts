import {ContentItem, Fields} from 'kentico-cloud-delivery';

import {PageItem} from './page';
import {Route} from '../models/route';
import {Nav} from '../models/nav';
import {getText} from './utils';

export class RouteItem extends ContentItem {
  static type = 'route';

  url: Fields.UrlSlugField;
  name: Fields.TextField;
  routes: RouteItem[];
  page: PageItem[];
  options: Fields.MultipleChoiceField;

  toModel(parent?: Route): Route {
    const page = this.page && this.page.length ? getPage(this.page[0]) : null;

    const route = {
      name: getText(this.name),
      codename: this.system.codename,
      url: getUrl(this, parent),
      routes: [],
      page
    } as Route;

    return { ...route, routes: this.routes.map(subroute => subroute.toModel(route)) };
  }

  toNav(parent?: Route): Nav {
    const model = this.toModel(parent);
    const url = !model.page ? null : model.url;
    
    return {
      name: model.name,
      hideFromMenu: getHideFromMenu(this),
      codename: model.codename,
      url,
      routes: this.routes.map(subroute => subroute.toNav(model))
    };
  }
}

function getPage(page: PageItem) {
  return (page && page.toModel()) || null;
}

function getUrl(route: RouteItem, parent?: Route|Nav): string {
  const url = route.url.value;
  return (parent && parent.url || '') + url;
}

function getHideFromMenu(route: RouteItem) {
  const checkbox = route.options.options.find(option => option.codename === 'hide_from_menu');
  return !!checkbox;
}
