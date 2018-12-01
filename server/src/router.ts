import express from 'express';
import getFrontpage from './views/page-types/frontpage';

export const router = express.Router();

router.get('/', async (_req, res) => {
    const data = await getFrontpage().toPromise();
    res.render('page-types/frontpage', data);
});