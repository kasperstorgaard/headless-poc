import express from 'express';
import getFrontpage from './api/pages/frontpage';
import {getNavigation} from './api/navigation';
import { forkJoin } from 'rxjs';

export const router = express.Router();

router.get('/', async (_req, res) => {
    const [page, navigation]  = await forkJoin(getFrontpage(), getNavigation()).toPromise();
    res.render('page-types/frontpage', {page, navigation});
});