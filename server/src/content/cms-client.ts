import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../../secret/project.json';
import {
  HomeItem,
  StepItem,
  StepsSectionItem,
  ProductGroupItem,
  PickABoxItem,
  PromoSectionItem,
  Route
} from './resolvers';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
    HomeItem,
    StepItem,
    StepsSectionItem,
    ProductGroupItem,
    PickABoxItem,
    PromoSectionItem,
    Route
  ].map(T => new TypeResolver(T.type, () => new T()))
});
