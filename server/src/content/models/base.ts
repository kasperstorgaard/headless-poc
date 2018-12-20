export interface Model {
  type: string;
}

export type navigation = 'page'|'subpage';

export interface PageBase extends Model {
  type: string;
  navigation: navigation;
}