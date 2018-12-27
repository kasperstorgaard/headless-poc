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
        <p>These are the available colors throughout the application.</p>
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
        <style>
          :host { display: block; }
          .spacings, .spacing {
            padding: 0;
            margin: 0;
          }
          .spacings {
            display: grid;
            grid-template-columns: 1fr;
            grid-column-gap: 12px;
            grid-row-gap: 12px;
          }
          .spacing {
            text-align: center;
            line-height: 2em;
            list-style-type: none;
            border: 1px solid black;
          }
          .spacing div {
            background: var(--color-background);
          }
        </style>
        <h3>Spacing</h3>
        <p>For consistency, all the margings, paddings etc. should be based on these spacing values.</p>
        <p>They are using a t-shirt scale from xs to xxl</p>
        <ul class="spacings">
          <li class="spacing" style="padding: var(--spacing-xs)"><div>xs</div></li>
          <li class="spacing" style="padding: var(--spacing-s)"><div>s</div></li>
          <li class="spacing" style="padding: var(--spacing-m)"><div>m</div></li>
          <li class="spacing" style="padding: var(--spacing-l)"><div>l</div></li>
          <li class="spacing" style="padding: var(--spacing-xl)"><div>xl</div></li>
          <li class="spacing" style="padding: var(--spacing-xxl)"><div>xxl</div></li>
        </ul>
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