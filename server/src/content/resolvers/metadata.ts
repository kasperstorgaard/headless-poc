import {ContentItem, Fields} from 'kentico-cloud-delivery';
import {Metadata} from '../models/metadata';
import {getImageUrl, getText} from './utils';

export abstract class MetadataItem extends ContentItem {
  metadataOgTitle: Fields.TextField;
  metadataTwitterTitle: Fields.TextField;
  metadataMetaDescription: Fields.TextField;
  metadataTwitterImage: Fields.AssetsField;
  metadataOgImage: Fields.AssetsField;
  metadataTwitterDescription: Fields.TextField;
  metadataTwitterCreator: Fields.TextField;
  metadataOgDescription: Fields.TextField;
  metadataMetaTitle: Fields.TextField;
  metadataTwitterSite: Fields.TextField;

  constructor() {
    super({
      propertyResolver: ((fieldName: string) => {
        if (fieldName === 'metadata__og_title') {
          return 'metadataOgTitle';
        }
        if (fieldName === 'metadata__twitter_title') {
          return 'metadataTwitterTitle';
        }
        if (fieldName === 'metadata__meta_description') {
          return 'metadataMetaDescription';
        }
        if (fieldName === 'metadata__twitter_image') {
          return 'metadataTwitterImage';
        }
        if (fieldName === 'metadata__og_image') {
          return 'metadataOgImage';
        }
        if (fieldName === 'metadata__twitter_description') {
          return 'metadataTwitterDescription';
        }
        if (fieldName === 'metadata__twitter_creator') {
          return 'metadataTwitterCreator';
        }
        if (fieldName === 'metadata__og_description') {
          return 'metadataOgDescription';
        }
        if (fieldName === 'metadata__meta_title') {
          return 'metadataMetaTitle';
        }
        return fieldName;
      })
    });
  }

  toModel() {
    return {
      metadata: {
        browser: {
          title: getText(this.metadataMetaTitle),
          description: getText(this.metadataMetaDescription)
        },
        facebook: {
          title: getText(this.metadataOgTitle),
          description: getText(this.metadataOgDescription),
          image: getImageUrl(this.metadataOgImage)
        },
        twitter: {
          site: getText(this.metadataTwitterSite),
          creator: getText(this.metadataTwitterCreator),
          title: getText(this.metadataTwitterTitle),
          description: getText(this.metadataTwitterDescription),
          image: getImageUrl(this.metadataTwitterImage)
        }
      } as Metadata
    }
  }
}
