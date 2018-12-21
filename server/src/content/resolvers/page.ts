import {ContentItem} from 'kentico-cloud-delivery';

import {Page} from '../models';
import {ContentResolver} from './base';
import {MetadataItem} from './metadata';
import {getText} from './utils';

export class PageItem extends MetadataItem
  implements ContentResolver<Page> {
  static type = 'page';

  content: ContentItem[];

  toModel(): Page {
    const base = super.toModel();

    return {
      ...base,
      type: 'page',
      content: (this.content || []).map(content => content.toModel()),
      headline: getText(this.headline)
    };
  }
}