import {html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store, RootState} from '../../../../store';
import {PageViewElement} from '../../../shared/page-view-element';

class FoundationDemo extends connect(store)(PageViewElement) {
  stateChanged(state: RootState) {
    super.hashUpdated(state.app!.hash);
  }

  protected render() {
    return html`
    ${super.render()}
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <section class="sif-section" id="introduction">
      <h2>Foundation</h2>
      <p>The foundation contains the basis for the UI of the application.</p>
      <p>It should give an introduction to the available colors, fonts etc. that can be used. Foundation contains the basis for the design of the application.</p>
    </section>
    <section class="sif-section">
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
      </style>
      <h3 id="colors">Colors</h3>
      <p>These are the available colors throughout the application.</p>
      <p><i>Note: these are very much work in progress.</i></p>
      <div class="sif-example">
        <ul class="colors">
          <li class="color" style="background: var(--color-brand)">brand</li>
          <li class="color" style="background: var(--color-error)">error</li>
          <li class="color" style="background: var(--color-warning)">warning</li>
          <li class="color" style="background: var(--color-info)">info</li>
          <li class="color" style="background: var(--color-success)">success</li>
          <li class="color" style="background: var(--color-light); border: 1px solid black">light</li>
          <li class="color" style="background: var(--color-background)">background</li>
        </ul>
      </div>
    </section>
    <section class="sif-section" id="spacing">
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
      <div class="sif-example">
        <ul class="spacings">
          <li class="spacing" style="padding: var(--spacing-xs)"><div>xs</div></li>
          <li class="spacing" style="padding: var(--spacing-s)"><div>s</div></li>
          <li class="spacing" style="padding: var(--spacing-m)"><div>m</div></li>
          <li class="spacing" style="padding: var(--spacing-l)"><div>l</div></li>
          <li class="spacing" style="padding: var(--spacing-xl)"><div>xl</div></li>
          <li class="spacing" style="padding: var(--spacing-xxl)"><div>xxl</div></li>
        </ul>
      </div>
    </section>
    <section class="sif-section" id="typography">
      <h3>Typography</h3>
      <p>typography text </p>
      <div class="sif-example">
      </div>
    </section>
    <section class="sif-section" id="tone-of-voice">
      <h3>tone of voice</h3>
      <p>typography text </p>
      <div class="sif-example">
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-foundation-demo', FoundationDemo);