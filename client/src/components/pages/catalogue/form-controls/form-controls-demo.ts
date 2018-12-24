import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import '../catalogue-example';
import {store} from '../../../../store';

class FormControlsDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css"></link>
    <style>
      :host { display: block; }
    </style>
    <sif-catalogue-example category="form-controls">
      <h2 slot="header">input</h2>
      <p>input description stuff</p>
    </sif-catalogue-example>
    `;
  }
}

window.customElements.define('sif-form-controls-demo', FormControlsDemo);