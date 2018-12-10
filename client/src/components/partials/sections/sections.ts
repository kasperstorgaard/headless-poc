import {LitElement, html, property} from '@polymer/lit-element';

import {StepsSection} from '../../../../../server/src/content/models/steps-section';
import {PromoSection} from '../../../../../server/src/content/models/promo-section';

import './steps-section/steps-section';
import './promo-section/promo-section';

class Sections extends LitElement {
  @property({type: Object})
  item: StepsSection|PromoSection|null = null;

  protected render() {
    if (!this.item) {
      return html``;
    }

    if ((this.item as StepsSection).steps) {
      return html`
      <sif-steps-section .item="${this.item}"></sif-steps-section>`;
    }

    return html`
    <sif-promo-section .item="${this.item}"></sif-promo-section>`;
  }
}

window.customElements.define('sif-sections', Sections);
