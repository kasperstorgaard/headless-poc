import {LitElement, html} from '@polymer/lit-element';
import {connect} from 'pwa-helpers/connect-mixin';

import '../catalogue-example';
import {store} from '../../../../store';

class ElementsDemo extends connect(store)(LitElement) {
  protected render() {
    return html`
    <style>
      :host {
        display: block;
      }
    </style>
    <sif-catalogue-example category="elements">
      <h2 slot="header">button</h2>
      <p>button description stuff</p>
    </sif-catalogue-example>
    `;
  }
}

window.customElements.define('sif-elements-demo', ElementsDemo);