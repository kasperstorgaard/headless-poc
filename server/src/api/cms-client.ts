import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../../secret/project.json';
import {
  ProductsPage,
  Frontpage,
  HeroSection,
  Step,
  StepsSection,
  ProductPage
} from '../types';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
      new TypeResolver('frontpage', () => new Frontpage()),
      new TypeResolver('hero_section', () => new HeroSection()),
      new TypeResolver('step', () => new Step()),
      new TypeResolver('steps_section', () => new StepsSection()),
      new TypeResolver('products_page', () => new ProductsPage()),
      new TypeResolver('product_page', () => new ProductPage()),
  ]
});
