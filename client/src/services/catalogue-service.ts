import {Nav} from 'headless-poc-server/dist/types';

const names = ['Foundation', 'Elements', 'Form Controls', 'Structure'];

export function getCatalogueNav() {
  return generateRoute('Catalogue', names.map(name => generateRoute(name)))
}

function generateRoute(name: string, routes: Nav[] = []) {
  const url = '/' + name.toLowerCase().replace(' ', '-');

  return {
    hideFromMenu: false,
    name,
    group: 'catalogue',
    codename: '',
    page: null,
    url: name === 'Catalogue' ? '/catalogue' : '/catalogue' + url,
    routes
  } as Nav
}