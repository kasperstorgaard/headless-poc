import {Nav} from 'headless-poc-server/dist/types';

export function getCatalogueNav() {
  return {
    hideFromMenu: false,
    name: 'Catalogue',
    group: 'catalogue',
    codename: '',
    page: null,
    url: '/catalogue',
    routes: []
  } as Nav
}