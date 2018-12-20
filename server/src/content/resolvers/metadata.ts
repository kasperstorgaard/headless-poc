import {ContentItem, Fields} from 'kentico-cloud-delivery';
import {Metadata} from '../models/metadata';

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
        if (fieldName === 'metadata__twitter_site') {
          return 'metadataTwitterSite';
        }
        return fieldName;
      })
    });
  }

  toModel() {
    return {
      metadata: {
        browser: {
          title: this.metadataMetaTitle.text,
          description: this.metadataMetaDescription.text
        },
        facebook: {
          title: this.metadataOgTitle.text,
          description: this.metadataOgDescription.text,
          image: this.metadataOgImage.assets[0].url
        },
        twitter: {
          site: this.metadataTwitterSite.text,
          creator: this.metadataTwitterCreator.text,
          title: this.metadataTwitterTitle.text,
          description: this.metadataTwitterDescription.text,
          image: this.metadataTwitterImage.assets[0].url
        }
      } as Metadata
    }
  }
}