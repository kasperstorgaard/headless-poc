import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class FoundationDemo extends connect(store)(LitElement) {
  protected render() {
    return html`foundation`;
  }
}

window.customElements.define('sif-foundation-demo', FoundationDemo);