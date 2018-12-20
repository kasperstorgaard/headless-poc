import {html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {Home as HomeItem} from 'headless-poc-server/dist/types';

import '../../components/partials/sections/sections';
import {store, RootState} from '../../store';
import {PageViewElement} from '../shared/page-view-element';

// These are the shared styles needed by this element.
import {SharedStyles} from '../shared/shared-styles';

class Home extends connect(store)(PageViewElement) {

  @property({type: Object})
  private _pageData: HomeItem | null = null;

  protected render() {
    const sections = this._pageData && this._pageData.sections || [];

    return html`
      ${SharedStyles}
      ${sections.map(section => html`
        <sif-sections .item="${section}"></sif-sections>
      `)}
    `;
  }

  stateChanged(state: RootState) {
    this._pageData = state.app!.pageData;
  }
}

window.customElements.define('sif-home', Home);
