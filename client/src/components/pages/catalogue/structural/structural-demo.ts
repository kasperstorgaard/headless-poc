import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class StructuralDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <link rel="stylesheet" href="static/elements/section.css">
    <style>
      :host { display: block; }
    </style>
    <section class="sif-section sif-examples">
      <h2>Structure</h2>
      <h3>Sections</h2>
      <div class="sif-example">
        <p>sections text</p>
      </div>
      <h3>navigation</h2>
      <div class="sif-example">
        <p>navigation description</p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-structural-demo', StructuralDemo);