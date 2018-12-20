export interface Nav {
  hideFromMenu: boolean;
  name: string;
  codename: string;
  url: string;
  routes: Nav[]
}