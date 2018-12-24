import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import '../catalogue-example';
import {store} from '../../../../store';

class FoundationDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css"></link>
    <style>
      :host { display: block; }
    </style>
    <sif-catalogue-example category="foundation">
      <h2 slot="header">colors</h2>
      <p>colors description</p>
    </sif-catalogue-example>
    `;
  }
}

window.customElements.define('sif-foundation-demo', FoundationDemo);