import {
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../../secret/project.json';
import * as resolvers from './resolvers';

const typeResolvers = Object.keys(resolvers)
  .map(key => {
    const T = (resolvers as any)[key];
    return new TypeResolver(T.type, () => new T());
  });

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers
});
