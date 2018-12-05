import express from 'express';
import getHomePage from './api/pages/home';
import {getNavigation, getUrlSegments} from './api/navigation';
import { forkJoin } from 'rxjs';
import getProductsPage from './api/pages/products';

export const router = express.Router();

router.get('/', async (_req, res) => {
    const [page, navigation]  = await forkJoin(getHomePage(), getNavigation()).toPromise();
    res.render('page-types/home', {page, navigation});
});

router.get('/products', async (_req, res) => {
    const [page, navigation]  = await forkJoin(
        getProductsPage(),
        getNavigation(),
    ).toPromise();
    res.render('page-types/products', {page, navigation});
});