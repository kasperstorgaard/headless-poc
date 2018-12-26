import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class FoundationDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/shared-styles.css">
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <link rel="stylesheet" href="static/elements/section.css">
    <section class="sif-examples sif-section">
      <h2>Foundation</h2>
      <p>The foundation contains the basis for the UI of the application.</p>
      <p>It should give an introduction to the available colors, fonts etc. that can be used. Foundation contains the basis for the design of the application.</p>
      <div class="sif-example">
        <style>
          :host { display: block; }
          .colors, .color {
            padding: 0;
            margin: 0;
          }
          .colors {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-column-gap: 12px;
            grid-row-gap: 12px;
          }
          .color {
            text-align: center;
            line-height: 3em;
            list-style-type: none;
          }
          .brand { background: var(--color-brand); }
          .error { background: var(--color-error); }
          .info { background: var(--color-info); }
          .warning { background: var(--color-warning); }
          .success { background: var(--color-success); }
          .light {
            background: var(--color-light);
            border: 1px solid black;
          }
          .background { background: var(--color-background); }
        </style>
        <h3>Colors</h3>
        <p>colors description</p>
        <ul class="colors">
          <li class="color brand">brand</li>
          <li class="color error">error</li>
          <li class="color warning">warning</li>
          <li class="color info">info</li>
          <li class="color success">success</li>
          <li class="color light">light</li>
          <li class="color background">background</li>
        </ul>
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
        <h3>tone of voice</h3>
        <p>typography text </p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-foundation-demo', FoundationDemo);