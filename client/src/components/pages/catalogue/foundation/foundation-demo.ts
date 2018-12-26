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
    <sif-catalogue-example name="colors">
      <p>colors description</p>
    </sif-catalogue-example>
    <sif-catalogue-example name="spacing">
      <p>spacing stuffs</p>
    </sif-catalogue-example>
    <sif-catalogue-example name="typography">
      <p>typography text </p>
    </sif-catalogue-example>
    <sif-catalogue-example name="imagery">
      <p>typography text </p>
    </sif-catalogue-example>
    <sif-catalogue-example name="tone of voice">
      <p>typography text </p>
    </sif-catalogue-example>
    `;
  }
}

window.customElements.define('sif-foundation-demo', FoundationDemo);