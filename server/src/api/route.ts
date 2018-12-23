import {Router} from 'express';
import {client} from '../content/cms-client';
import {RouteItem} from '../content/resolvers';

export const routes = Router();

routes.get('**', async (req, res) => {
  const parts = req.path.replace(/(^\/|\/$)/, '').split('/');

  const item = await getItem(parts);
  const model = item ? item.toModel() : null;

  if (!item) {
    res.status(404).send('Route not found');
  } else {
    res.json(model);
  }
})

async function getItem(parts: string[]) {
  const lastPart = parts[parts.length - 1];

  if (!lastPart || lastPart === 'home') {
    const response = await client
      .item<RouteItem>('root_route')
      .depthParameter(3)
      .getPromise();

    return response.isEmpty ? null : response.item.page[0];
  }

  const response = await client
    .items<RouteItem>()
    .equalsFilter('elements.url', lastPart)
    .depthParameter(3)
    .getPromise();

    if (response.isEmpty) {
      return null;
    }

    if (response.items.length > 1 && parts.length > 1) {
      const candidates = await Promise.all(response.items.map(item =>
        getParentMatch(item, parts[parts.length - 2])
      ));

      return candidates.find(candidate => candidate != null);
    }

    return response.items[0].page[0];
}

async function getParentMatch(child: RouteItem, url: string): Promise<RouteItem | null> {
  const response = await client
    .items<RouteItem>()
    .equalsFilter('elements.url', url)
    .depthParameter(3)
    .getPromise();

    if (response.isEmpty) {
      return null;
    }

    const matches = response.items.some(item =>
      item.routes.some(route => route.system.codename === child.system.codename));

    return matches ? child : null;
}