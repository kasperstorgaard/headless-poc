import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class ElementsDemo extends connect(store)(LitElement) {
  protected render() {
    return html`elements`;
  }
}

window.customElements.define('sif-elements-demo', ElementsDemo);