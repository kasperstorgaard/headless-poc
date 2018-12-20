import {Model} from './base';
import {Link} from './link';

export interface PromoSection extends Model {
  backgroundImage: string;
  headline: string;
  name: string;
  body: string;
  cta: Link;
}
