import {html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import './foundation/foundation-demo';
import './elements/elements-demo';
import './form-controls/form-controls-demo';
import './structure/structure-demo';

import {store, RootState} from '../../../store';
import {PageViewElement} from '../../shared/page-view-element';
import {getCatalogueNav} from '../../../services/catalogue-service';

class Catalogue extends connect(store)(PageViewElement) {
  @property({type: String})
  private category = '';

  protected render() {
    return html`
    ${super.render()}
    <section ?hidden=${!!this.category && this.category !== 'catalogue'} class="sif-section">
      <h1>Catalogue</h1>
      <p>In the catalogue you can get a preview of all the available elements and components that can be used throughout the application.</p>
      <p>These are the available groups in the catalogue:</p>
      ${getCatalogueNav().routes.map(nav =>
        html`<a href="${nav.url}">${nav.name}</a>`)}
    </section>
    <sif-foundation-demo ?active=${this.category === 'foundation'}></sif-foundation-demo>
    <sif-elements-demo ?active=${this.category === 'elements'}></sif-elements-demo>
    <sif-form-controls-demo ?active=${this.category === 'form-controls'}></sif-form-controls-demo>
    <sif-structure-demo ?active=${this.category === 'structure'}></sif-structure-demo>
    `;
  }

  stateChanged(state: RootState) {
    const pathName = state.app!.pathName;
    this.category = pathName.replace(/\/?catalogue\//g, '')
  }
}

window.customElements.define('sif-catalogue', Catalogue);