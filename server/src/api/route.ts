import {Router} from 'express';
import {client} from '../content/cms-client';
import {HomeItem, PageItem} from '../content/resolvers';

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
      .item<HomeItem>('home')
      .depthParameter(3)
      .getPromise();

    return response.isEmpty ? null : response.item.toModel();
  }

  const response = await client
    .items<PageItem>()
    .containsFilter('elements.navigation', [navigationType])
    .equalsFilter('elements.url', url)
    .depthParameter(3)
    .getPromise();

    return response.isEmpty ? null : response.getFirstItem().toModel();
}