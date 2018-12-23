import {Router} from 'express';

import {routes as routeRoutes} from './route';
import {
  routes as navigationRoutes,
  warmup as warmupNavigation
} from './navigation';

export const routes = Router();

routes.use('/route', routeRoutes);
routes.use('/navigation', navigationRoutes);

export function warmup(languages: string[]) {
  return warmupNavigation(languages);
}