import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class BlocksDemo extends connect(store)(LitElement) {
  protected render() {
    return html`blocks`;
  }
}

window.customElements.define('sif-blocks-demo', BlocksDemo);