import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class FoundationDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <link rel="stylesheet" href="static/elements/section.css">
    <style>
      :host { display: block; }
    </style>
    <section class="sif-examples sif-section">
      <h2>Foundation</h2>
      <p>The foundation contains the basis for the UI of the application.</p>
      <p>It should give an introduction to the available colors, fonts etc. that can be used. Foundation contains the basis for the design of the application.</p>
      <div class="sif-example">
        <h3>Colors</h3>
        <p>colors description</p>
      </div>
      <div class="sif-example">
        <h3>Spacing</h3>
        <p>spacing stuffs</p>
      </div>
      <div class="sif-example">
        <h3>Typography</h3>
        <p>typography text </p>
      </div>
      <div class="sif-example">
        <h3>Typography</h3>
        <p>typography text </p>
      </div>
      <div class="sif-example">
        <h3>tone of voice</h3>
        <p>typography text </p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-foundation-demo', FoundationDemo);