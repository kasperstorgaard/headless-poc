import {html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import '../../components/content/content';
import {store} from '../../store';
import {PageViewElement} from '../shared/page-view-element';

class Catalogue extends connect(store)(PageViewElement) {
  protected render() {
    return html`hello :)`;
  }
}

window.customElements.define('sif-catalogue', Catalogue);
