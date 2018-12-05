import {ContentItem, Fields} from 'kentico-cloud-delivery';

export class Step extends ContentItem {
    public static codename = 'step';

    public illustrationThumbnail: Fields.AssetsField;
    public headline: Fields.TextField;
    public description: Fields.TextField;
    public image: Fields.AssetsField;
    public summary: Fields.TextField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'illustration_thumbnail') {
                    return 'illustrationThumbnail';
                }
                return fieldName;
            })
        });
    }
}
