export interface Nav {
  hideFromMenu: boolean;
  name: string;
  group?: string;
  codename: string;
  url: string;
  routes: Nav[]
}