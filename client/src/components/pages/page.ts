import {html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import {Page as PageModel} from 'headless-poc-server/dist/types';

import '../../components/content/content';
import {store, RootState} from '../../store';
import {PageViewElement} from '../shared/page-view-element';

class Page extends connect(store)(PageViewElement) {
  @property({type: Object})
  private _pageData: PageModel | null = null;

  protected render() {
    const content = this._pageData && this._pageData.content || [];

    return html`
      ${content.map(item => html`<sif-content .item="${item}"></sif-content>`)}
    `;
  }

  stateChanged(state: RootState) {
    this._pageData = state.app!.pageData;
  }
}

window.customElements.define('sif-page', Page);
