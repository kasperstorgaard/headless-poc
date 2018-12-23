/// <reference types="headless-poc-server/dist/types/index">

import {LitElement, html, property} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin.js';
import {TemplateResult} from 'lit-html';

import {Nav as NavItem} from 'headless-poc-server/dist/types';

// The following line imports the type only - it will be removed by tsc so
// another import for app-drawer.js is required below.
import {AppDrawerElement} from '@polymer/app-layout/app-drawer/app-drawer.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';

// These are the elements needed by this element.
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';

// import 'headless-poc-server/dist/types/index';

import {store, RootState} from '../../../store';
import {updateDrawerState} from '../../../actions/app';

import {menuIcon} from '../../shared/icons';

class Header extends connect(store)(LitElement) {
  protected render() {
    const renderRoute: (item: NavItem, recursive?: boolean) => TemplateResult = (item, recursive = true) => html`
      ${item.url ?
        html`<a ?selected="${this._page.includes(item.codename)}" href="${item.url}">${item.name}</a>` :
        html`<div class="group" ?selected="${this._page.includes(item.codename)}">${item.name}</div>`
      }
      ${recursive ? renderRoutes(item.routes) : html``}
    `;

    const renderRoutes: (items: NavItem[]) => TemplateResult = items => {
      if (items && items.length) {
        return html`
          <ul>
            ${items.map(item => html`<li>${renderRoute(item)}</li>`)}
          </ul>
        `;
      }
      return html``;
    }

    const nav = (className: string) => {
      if (!this._navigation) {
        return html``;
      }

      const rootItem = {...this._navigation, routes: []};
      const items = [
        rootItem,
        ...this._navigation.routes.filter(route => !route.hideFromMenu)
      ];

      return html`
      <nav class="${className}">
        ${renderRoutes(items)}
      </nav>
      `;
    };

    // // Anything that's related to rendering should be done in here.
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

  @property({type: String})
  private _navigation: NavItem | null = null;

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
    this._navigation = state.app!.navigation;
    this._drawerOpened = state.app!.drawerOpened;
  }
}

window.customElements.define('sif-header', Header);
