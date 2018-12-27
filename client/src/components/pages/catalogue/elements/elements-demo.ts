import {html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store, RootState} from '../../../../store';
import {PageViewElement} from '../../../shared/page-view-element';

class ElementsDemo extends connect(store)(PageViewElement) {
  stateChanged(state: RootState) {
    super.hashUpdated(state.app!.hash);
  }

  protected render() {
    return html`
    ${super.render()}
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <link rel="stylesheet" href="static/elements/button.css">
    <link rel="stylesheet" href="static/elements/section.css">
    <style>
      :host { display: block; }
    </style>
    <section class="sif-section" id="introduction">
      <h2>Elements</h2>
      <p>
        Elements are simple, self-contained, and can be reused all over the application.<br />
        Their properties and classes control how they look, and they have very little state or complex ui.
      </p>
    </section>
    <section class="sif-section" id="buttons">
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