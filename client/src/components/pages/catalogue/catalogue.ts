import {html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import './foundation/foundation-demo';
import './elements/elements-demo';
import './form-controls/form-controls-demo';
import './structural/structural-demo';

import {store, RootState} from '../../../store';
import {PageViewElement} from '../../shared/page-view-element';

class Catalogue extends connect(store)(PageViewElement) {
  @property({type: String})
  private category = '';

  protected render() {
    return html`
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
    case 'structural': return html`<sif-structural-demo></sif-structural-demo>`;
    default: return html``;
  }
}