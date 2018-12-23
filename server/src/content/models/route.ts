export interface Route {
  name: string;
  codename: string;
  group?: string;
  url: string;
  routes: Route[];
  page: any;
}