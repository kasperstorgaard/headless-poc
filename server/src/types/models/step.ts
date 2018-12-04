import {ContentItem, Fields} from 'kentico-cloud-delivery';

export class Step extends ContentItem {
    public static codename = 'step';

    public image: Fields.AssetsField;
    public headline: Fields.TextField;
    public description: Fields.TextField;
}
