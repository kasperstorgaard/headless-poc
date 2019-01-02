import {html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {store, RootState} from '../../../../store';
import {PageViewElement} from '../../../shared/page-view-element';

class StructureDemo extends connect(store)(PageViewElement) {
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
      <h2>Structure</h2>
      <p>The structure components give other components a UI container, a behavior or a flow (clicking one will show the other, etc.)</p>
    </section>
    <section class="sif-section" id="sections">
      <h3>Sections</h3>
      <div class="sif-example">
        <p>sections text</p>
      </div>
    </section>
    <section class="sif-section" id="navigation">
      <h3>navigation</h2>
      <div class="sif-example">
        <p>navigation description</p>
      </div>
    </section>
    <section class="sif-section" id="cards">
      <h3>cards</h2>
      <div class="sif-example">
        <p>cards description</p>
      </div>
    </section>
    `;
  }
}

window.customElements.define('sif-structure-demo', StructureDemo);