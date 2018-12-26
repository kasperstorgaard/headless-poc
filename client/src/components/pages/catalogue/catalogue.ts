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
    <link rel="stylesheet" href="static/elements/section.css">
    ${renderCatalogueElement(this.category)}
    `;
  }

  stateChanged(state: RootState) {
    const pathName = state.app!.pathName;
    this.category = pathName.replace(/\/?catalogue\//g, '')
  }
}

window.customElements.define('sif-catalogue', Catalogue);

function renderCatalogueElement(category: string) {
  switch (category) {
    case 'foundation': return html`<sif-foundation-demo></sif-foundation-demo>`;
    case 'elements': return html`<sif-elements-demo></sif-elements-demo>`;
    case 'form-controls': return html`<sif-form-controls-demo></sif-form-controls-demo>`;
    case 'structure': return html`<sif-structure-demo></sif-structure-demo>`;
    default: return html`
    <section class="sif-section">
      <h1>Catalogue</h1>
      <p>In the catalogue you can get a preview of all the available elements and components that can be used throughout the application.</p>
      <p>These are the available groups in the catalogue:</p>
      ${getCatalogueNav().routes.map(nav =>
        html`<a href="${nav.url}">${nav.name}</a>`)}
    </section>
    `;
  }
}