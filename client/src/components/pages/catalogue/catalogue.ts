import {html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import './foundation/foundation-demo';
import './blocks/blocks-demo';
import './form-controls/form-controls-demo';
import './structural/structural-demo';

import {store, RootState} from '../../../store';
import {PageViewElement} from '../../shared/page-view-element';

class Catalogue extends connect(store)(PageViewElement) {
  @property({type: String})
  private _pathName = '';

  protected render() {
    const category = this._pathName.replace(/\/?catalogue\//g, '')

    switch (category) {
      case 'foundation': return html`<sif-foundation-demo></sif-foundation-demo>`;
      case 'blocks': return html`<sif-blocks-demo></sif-blocks-demo>`;
      case 'form-controls': return html`<sif-form-controls-demo></sif-form-controls-demo>`;
      case 'structural': return html`<sif-structural-demo></sif-structural-demo>`;
      default: return html``;
    }
  }

  stateChanged(state: RootState) {
    this._pathName = state.app!.pathName;
  }
}

window.customElements.define('sif-catalogue', Catalogue);
