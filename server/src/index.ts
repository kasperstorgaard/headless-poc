import express from 'express';
import {join} from 'path';

import { updateNavigation } from './content/navigation';
import { routes } from './route-api';

const app = express();

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));
app.use('/static', express.static(join(__dirname, '../dist/static'), {}));
app.use('/api/v1/route', routes);

app.get('**', async (_req, res) => res.render('index'));

app.listen(3000, () => {
  console.log('server started on localhost:3000')
  updateNavigation('default');
});
