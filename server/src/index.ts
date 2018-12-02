import express from 'express';
import {join} from 'path';

import {router} from './router';

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use(router);
app.use(express.static(join(__dirname, '../dist/static')));

app.listen(3000, () => {
  console.log('server started on localhost:3000');
});
