import {Router} from 'express';
import {client} from './content/cms-client';

export const routes = Router();

routes.get('**', async (req, res) => {
  const parts = req.path.replace(/(^\/|\/$)/, '').split('/');

  const type = parts.length > 1 ? 'subpage' : 'page';
  const item = await getItem(type, parts[parts.length - 1]);

  if (!item) {
    res.status(404).send('Route not found');
  } else {
    res.json(item);
  }
})

async function getItem(navigationType: 'page' | 'subpage', url: string) {
  if (!url || url === 'home') {
    const response = await client
      .item('home')
      .depthParameter(3)
      .getPromise();

    return response.isEmpty ? null : response.item;
  }

  const response = await client
    .items()
    .containsFilter('elements.navigation', [navigationType])
    .equalsFilter('url', url)
    .depthParameter(3)
    .getPromise();

    return response.isEmpty ? null : response.getFirstItem();
}