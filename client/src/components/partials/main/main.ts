import {LitElement, html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';

declare const process: any;

// This element is connected to the Redux store.
import {store, RootState} from '../../../store';

class Main extends connect(store)(LitElement) {
  protected render() {
    const pageActive = !['404', 'catalogue'].includes(this._page);

    // Anything that's related to rendering should be done in here.
    return html`
    <link rel="stylesheet" href="static/components/partials/main/main.css">


    <!-- Main content -->
    <main role="main" class="main-content">
      <sif-page class="page" ?active="${pageActive}"></sif-page>
      ${process.env.NODE_ENV === 'development' ?
      html`<sif-catalogue class="page" ?active="${/catalogue\/?/.test(this._pathName)}"></sif-catalogue>` :
      html ``}
      <sif-page404 class="page" ?active="${this._page === '404'}"></sif-page404>
    </main>`;
  }

  @property({type: String})
  appTitle = '';

  @property({type: String})
  private _page = '';

  @property({type: String})
  private _pathName = '';

  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._pathName = state.app!.pathName;
  }
}

window.customElements.define('sif-main', Main);
