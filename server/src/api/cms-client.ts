import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../../secret/project.json';
import {
  ProductGroup,
  Frontpage,
  HeroSection,
  Step,
  StepsSection,
  Product,
  Promo
} from '../types';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
    Frontpage,
    HeroSection,
    Step,
    StepsSection,
    ProductGroup,
    Product,
    Promo
  ].map(T => new TypeResolver(T.codename, () => new T()))
});
