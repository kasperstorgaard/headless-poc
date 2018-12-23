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
      <nav class="toolbar-list">
        ${renderRoutes(this._pathName, this._navigation)}
      </nav>
    </app-header>
 
    <!-- Drawer content -->
    <app-drawer .opened="${this._drawerOpened}"
        @opened-changed="${this._drawerOpenedChanged}">
      <nav class="drawer-list">
        ${renderRoutes(this._pathName, this._navigation)}
      </nav>
    </app-drawer>`;
  }

  @property({type: String})
  appTitle = '';

  @property({type: String})
  private _pathName = '';

  @property({type: String})
  private _navigation: NavItem[];

  @property({type: Boolean})
  private _drawerOpened = false;

  private _drawerOpenedChanged(e: Event) {
    store.dispatch(updateDrawerState((e.target as AppDrawerElement).opened));
  }

  private _menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  stateChanged(state: RootState) {
    this._pathName = state.app!.pathName;
    this._navigation = state.app!.navigation;
    this._drawerOpened = state.app!.drawerOpened;
  }
}

window.customElements.define('sif-header', Header);

function renderRoute (pathName: string, item: NavItem, recursive = true): TemplateResult {
  const selected = !item.url || item.url.length < 2 ? pathName === 'home' :
    pathName.startsWith((item.url || '').slice(1));

    return html`<a ?selected="${selected}" href="${item.url}">${item.name}</a>
      ${recursive ? renderRoutes(pathName, item.routes) : html``}
    `;
}

function renderRoutes (page: string, items: NavItem[]): TemplateResult {
  if (items && items.length) {
    const groupLookup = items.reduce((acc, item) => {
      const key = item.group || '';
      acc[key] = acc[key] || {name: key, items: []};
      acc[key].items.push(item);
      return acc;
    }, {} as {[key: string]: {name: string, items: NavItem[]}});

    const groups = Object.keys(groupLookup).map(key => groupLookup[key]);
    
    return html`
      ${groups.map(({name, items}) => html`
      <ul class=${name}>
        ${items.map(item => html`<li>${renderRoute(page, item)}</li>`)}
      </ul>
      `)}
    `;
  }
  return html``;
}