import { 
  TypeResolver,
  DeliveryClient
} from 'kentico-cloud-delivery';

import project from '../secret/project.json';
import { Frontpage } from './types/frontpage';
import { HeroSection } from './types/hero_section';
import { Step } from './types/step';
import { StepsSection } from './types/steps_section';

export const client = new DeliveryClient({
  projectId: project.key,
  typeResolvers: [
      new TypeResolver('frontpage', () => new Frontpage()),
      new TypeResolver('hero_section', () => new HeroSection()),
      new TypeResolver('step', () => new Step()),
      new TypeResolver('steps_section', () => new StepsSection()),
  ]
});
