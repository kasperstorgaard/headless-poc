import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../secret/project.json';
import { Frontpage } from './types/frontpage';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
      new TypeResolver('fronpage', () => new Frontpage())
  ]
});
