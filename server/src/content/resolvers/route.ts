import {ContentItem} from 'kentico-cloud-delivery';

import {PageItem} from './page';

export class Route extends ContentItem {
    static type = 'route';

    routes: Route[];
    page: PageItem[];
}
