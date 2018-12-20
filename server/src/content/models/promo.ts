import {CTA} from './cta';
import {Model} from './base';

export interface Promo extends Model {
  cta: CTA;
  backgroundImage: string;
  headline: string;
  name: string;
  body: string;
}
