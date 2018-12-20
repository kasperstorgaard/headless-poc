import express from 'express';
import spdy from 'spdy';
import {join} from 'path';
import {readFileSync} from 'fs';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import chalk from 'chalk';
import logger from 'morgan';

import {routes, warmup} from './api';

const port = 3000;
const app = express();

const options = {
  key: readFileSync(join(__dirname, 'secret/server.key')),
  cert: readFileSync(join(__dirname, 'secret/server.crt'))
}

app.set('view engine', 'pug');
app.set('views', join(__dirname, 'views'));

app.use(logger('dev'))
app.use(compression());
app.use(cookieParser());
app.use('/static', express.static(join(__dirname, 'static'), {}));
app.use('/api', routes);

app.get('**', async (_req, res) => res.render('index'));

spdy
  .createServer(options, app)
  .listen(port, () => {
    console.log(chalk.magenta([
      '┌-----------------------------┐',
      `| App listening on port: ${port} |`,
      '└-----------------------------┘'
    ].join('\n')));

    warmup(['default']);
  });
