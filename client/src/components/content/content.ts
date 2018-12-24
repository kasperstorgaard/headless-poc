import {html} from 'lit-html';

import {Model} from 'headless-poc-server/dist/content/models/base';

import './steps/steps';
import './promo/promo';

export function renderContentItem(item: Model) {
  const type = item && item.type;
  switch(type) {
    case 'steps': return html`<sif-steps .item="${item}"></sif-steps>`;
    case 'promo': return html`<sif-promo .item="${item}"></sif-promo>`;
    default: return html``;
  }
}