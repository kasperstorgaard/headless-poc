import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class StructuralDemo extends connect(store)(LitElement) {
  protected render() {
    return html`structural`;
  }
}

window.customElements.define('sif-structural-demo', StructuralDemo);