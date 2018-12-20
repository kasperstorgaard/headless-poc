import {Router} from 'express';

import {routes as routeRoutes} from './route';
import {routes as navigationRoutes} from './navigation';

export const routes = Router();

routes.use('/route', routeRoutes);
routes.use('/navigation', navigationRoutes);