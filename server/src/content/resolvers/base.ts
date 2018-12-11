import { Model } from '../models/base';

export interface ContentResolver<T extends Model> {
  toModel(): T;
}