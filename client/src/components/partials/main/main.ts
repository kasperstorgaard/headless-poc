import {LitElement, html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import {store, RootState} from '../../../store';

class Main extends connect(store)(LitElement) {
  protected render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <link rel="stylesheet" href="static/components/partials/main/main.css">

    <!-- Main content -->
    <main role="main" class="main-content">
      <sif-home class="page" ?active="${this._page === 'home'}"></sif-home>
      <sif-page2 class="page" ?active="${this._page === 'page2'}"></sif-page2>
      <sif-page3 class="page" ?active="${this._page === 'page3'}"></sif-page3>
      <sif-page404 class="page" ?active="${this._page === 'page404'}"></sif-page404>
    </main>`;
  }

  @property({type: String})
  appTitle = '';

  @property({type: String})
  private _page = '';

  stateChanged(state: RootState) {
    this._page = state.app!.page;
  }
}

window.customElements.define('sif-main', Main);
