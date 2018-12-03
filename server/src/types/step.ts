import {ContentItem, Fields} from 'kentico-cloud-delivery';

export class Step extends ContentItem {
    public image: Fields.AssetsField;
    public headline: Fields.TextField;
    public description: Fields.TextField;
}
