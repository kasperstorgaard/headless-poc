import {LitElement, html, property} from '@polymer/lit-element';
import {Promo, Steps} from 'headless-poc-server/dist/types';

import './steps/steps';
import './promo/promo';

class Content extends LitElement {
  @property({type: Object})
  item: Steps|Promo|null = null;

  protected render() {
    const type = this.item && this.item.type;

    switch(type) {
      case 'steps': return html`<sif-steps .item="${this.item}"></sif-steps>`;
      case 'promo': return html`<sif-promo .item="${this.item}"></sif-promo>`;
      default: return html``;
    }
  }
}

window.customElements.define('sif-content', Content);