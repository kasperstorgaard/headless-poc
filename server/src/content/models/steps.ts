import {Model} from './base';
import {Step} from './step';
import {CTA} from './cta';

export interface Steps extends Model {
  headline: string;
  cta: CTA;
  items: Step[];
}
