import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class ElementsDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <link rel="stylesheet" href="static/elements/button.css">
    <link rel="stylesheet" href="static/elements/section.css">
    <style>
      :host { display: block; }
    </style>
    <section class="sif-section">
      <h2>Elements</h2>
      <p>
        Elements are simple, self-contained, and can be reused all over the application.<br />
        Their properties and classes control how they look, and they have very little state or complex ui.
      </p>
      <h3>Buttons</h3>
      <div class="sif-example">
        <p>regular button</p>
        <button class="sif-button">click me :)</button>
        <p class="sif-example-description">mostly used on dark/image backgrounds</p>
      </div>
      <div class="sif-example theme-secondary">
        <p>secondary theme button</p>
        <button class="sif-button">click me :)</button>
        <p class="sif-example-description">used on light backgrounds</p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-elements-demo', ElementsDemo);