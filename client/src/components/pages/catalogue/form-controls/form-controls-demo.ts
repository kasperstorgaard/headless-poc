import {html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store, RootState} from '../../../../store';
import {PageViewElement} from '../../../shared/page-view-element';

class FormControlsDemo extends connect(store)(PageViewElement) {
  stateChanged(state: RootState) {
    super.hashUpdated(state.app!.hash);
  }

  protected render() {
    return html`
    ${super.render()}
    <link rel="stylesheet" href="static/components/pages/catalogue/catalogue-styles.css">
    <link rel="stylesheet" href="static/elements/section.css">
    <style>
      :host { display: block; }
    </style>
    <section class="sif-section" id="introduction">
      <h2>Form controls</h2>
      <p>
        Anything related to forms: inputs, errors, labels etc. <br />
        That doesn't mean that the form controls have to be used in a traditional sign up flow,
        it could just as easily be an email signup form or a search field.
      </p>
    </section>
    <section class="sif-section" id="inputs">
      <h3>Inputs</h3>
      <div class="sif-example">
        <p>input description stuff</p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-form-controls-demo', FormControlsDemo);