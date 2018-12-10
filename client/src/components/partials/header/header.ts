import { LitElement, html, property } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';

// The following line imports the type only - it will be removed by tsc so
// another import for app-drawer.js is required below.
import { AppDrawerElement } from '@polymer/app-layout/app-drawer/app-drawer.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

import { store, RootState } from '../../../store';
import { updateDrawerState } from '../../../actions/app';

import { menuIcon } from '../../shared/icons';

class Header extends connect(store)(LitElement) {
  protected render() {
    const nav = (className: string) => html`
    <nav class="${className}">
      <a ?selected="${this._page === 'home'}" href="/">home</a>
      <a ?selected="${this._page === 'page2'}" href="/page2">page Two</a>
      <a ?selected="${this._page === 'page3'}" href="/page3">page Three</a>
    </nav>`;

    // Anything that's related to rendering should be done in here.
    return html`
    <link rel="stylesheet" href="static/components/partials/header/header.css">

    <!-- Header -->
    <app-header condenses reveals effects="waterfall">
      <app-toolbar class="toolbar-top">
        <button class="menu-btn" title="Menu" @click="${this._menuButtonClicked}">${menuIcon}</button>
        <div main-title>${this.appTitle}</div>
      </app-toolbar>

      <!-- This gets hidden on a small screen-->
      ${nav('toolbar-list')}
    </app-header>
 
    <!-- Drawer content -->
    <app-drawer .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}">
      ${nav('drawer-list')}
    </app-drawer>`;
  }

  @property({type: String})
  appTitle = '';

  @property({type: String})
  private _page = '';

  @property({type: Boolean})
  private _drawerOpened = false;

  private _drawerOpenedChanged(e: Event) {
    store.dispatch(updateDrawerState((e.target as AppDrawerElement).opened));
  }

  private _menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  stateChanged(state: RootState) {
    this._page = state.app!.page;
    this._drawerOpened = state.app!.drawerOpened;
  }
}

window.customElements.define('sif-header', Header);
