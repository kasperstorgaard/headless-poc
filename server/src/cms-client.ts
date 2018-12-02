import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../secret/project.json';
import { Frontpage } from './types/frontpage';
import { HeroSection } from './types/hero_section.js';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
      new TypeResolver('frontpage', () => new Frontpage()),
      new TypeResolver('hero_section', () => new HeroSection())
  ]
});
