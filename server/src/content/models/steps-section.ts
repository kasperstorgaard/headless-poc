import {Step} from './step';
import {Link} from './link';

export interface StepsSection {
  headline: string;
  name: string;
  cta: Link;
  steps: Step[];
}
