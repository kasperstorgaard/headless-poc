import {LitElement, html, property, PropertyValues} from '@polymer/lit-element';
import {setPassiveTouchGestures} from '@polymer/polymer/lib/utils/settings.js';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {installMediaQueryWatcher} from 'pwa-helpers/media-query.js';
import {installOfflineWatcher} from 'pwa-helpers/network.js';
import {installRouter} from 'pwa-helpers/router.js';
import {updateMetadata} from 'pwa-helpers/metadata.js';

// This element is connected to the Redux store.
import {store, RootState} from '../store';

import './partials/header/header';
import './partials/main/main';
import './partials/footer/footer';

// These are the actions needed by this element.
import {
  navigate,
  updateOffline,
  updateDrawerState,
  loadNavigation
} from '../actions/app';

class App extends connect(store)(LitElement) {
  protected render() {
    // Anything that's related to rendering should be done in here.
    return html`
    <link rel="stylesheet" href="static/components/app.css">

    <sif-header></sif-header>
    <sif-main></sif-main>
    <sif-footer></sif-footer>
    `;
  }

  @property({type: String})
  appTitle = '';

  @property({type: String})
  private _page = '';

  constructor() {
    super();
    // To force all event listeners for gestures to be passive.
    // See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    setPassiveTouchGestures(true);
  }

  protected firstUpdated() {
    installRouter((location) => store.dispatch(navigate(decodeURIComponent(location.pathname))));
    installOfflineWatcher((offline) => store.dispatch(updateOffline(offline)));
    installMediaQueryWatcher(`(min-width: 460px)`,
        () => store.dispatch(updateDrawerState(false)));
    store.dispatch(loadNavigation());
  }

  protected updated(changedProps: PropertyValues) {
    if (changedProps.has('_page')) {
      const pageTitle = this.appTitle + ' - ' + this._page;
      updateMetadata({
        title: pageTitle,
        description: pageTitle
        // This object also takes an image property, that points to an img src.
      });
    }
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
  }
}

window.customElements.define('sif-app', App);
