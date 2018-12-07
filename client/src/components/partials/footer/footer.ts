import { LitElement, html, property } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store, RootState } from '../../../store';

import '../../shared/snack-bar';

class Footer extends connect(store)(LitElement) {
  @property({type: Boolean})
  private _snackbarOpened = false;

  @property({type: Boolean})
  private _offline = false;

  protected render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <link rel="stylesheet" href="components/partials/footer/footer.css">
    <footer>
      this is footer...
    </footer>

    <snack-bar ?active="${this._snackbarOpened}">
        You are now ${this._offline ? 'offline' : 'online'}.</snack-bar>
    `;
  }

  stateChanged(state: RootState) {
    this._offline = state.app!.offline;
    this._snackbarOpened = state.app!.snackbarOpened;
  }
}

window.customElements.define('sif-footer', Footer);
