export interface Route {
  name: string;
  codename: string;
  url: string;
  routes: Route[];
  page: any;
}