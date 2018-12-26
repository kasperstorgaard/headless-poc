import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store} from '../../../../store';

class FormControlsDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css"></link>
    <link rel="stylesheet" href="static/elements/section.css"></link>
    <style>
      :host { display: block; }
    </style>
    <section class="sif-section sif-examples">
      <h2>Form controls</h2>
      <p>
        Anything related to forms: inputs, errors, labels etc.
        That doesn't mean that the form controls have to be used in a traditional sign up flow,
        and could just as easily be an email signup form or a search field.
      </p>
      <h3>Inputs</h3>
      <div class="sif-example">
        <p>input description stuff</p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-form-controls-demo', FormControlsDemo);