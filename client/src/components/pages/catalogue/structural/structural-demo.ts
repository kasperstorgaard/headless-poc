import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import '../catalogue-example';
import {store} from '../../../../store';

class StructuralDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css"></link>
    <style>
      :host { display: block; }
    </style>
    <sif-catalogue-example category="structural">
      <h2 slot="header">sections</h2>
      <p>sections text</p>
    </sif-catalogue-example>
    <sif-catalogue-example category="structural">
      <h2 slot="header">navigation</h2>
      <p>navitation description</p>
    </sif-catalogue-example>
    `;
  }
}

window.customElements.define('sif-structural-demo', StructuralDemo);