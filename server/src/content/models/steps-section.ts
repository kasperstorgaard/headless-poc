import {Model} from './base';
import {Step} from './step';
import {Link} from './link';

export interface StepsSection extends Model {
  headline: string;
  name: string;
  cta: Link;
  steps: Step[];
}
