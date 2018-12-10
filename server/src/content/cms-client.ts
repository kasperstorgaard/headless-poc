import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../../secret/project.json';
import {
  ProductGroup,
  Home,
  HeroSection,
  Step,
  StepsSection,
  PickABox,
  Promo
} from './models';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
    Home,
    HeroSection,
    Step,
    StepsSection,
    ProductGroup,
    PickABox,
    Promo
  ].map(T => new TypeResolver(T.type, () => new T()))
});
