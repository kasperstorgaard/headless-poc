import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class FormControlsDemo extends connect(store)(LitElement) {
  protected render() {
    return html`form-controls`;
  }
}

window.customElements.define('sif-form-controls-demo', FormControlsDemo);