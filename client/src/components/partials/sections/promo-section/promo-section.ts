import {LitElement, html, property} from '@polymer/lit-element';

import {PromoSection as PromoSectionItem} from '../../../../../../server/src/content/models/promo-section';

class PromoSection extends LitElement {
  @property({type: Object})
  item: PromoSectionItem|null = null;

  protected render() {
    if (!this.item) {
      return html``;
    }

    return html`
    <section style="background-image: url(${this.item.backgroundImage})">
      <h1 class="headline">${this.item.headline}</h1>
      <p class="body">${this.item.body}</p>
      <a class="cta" href="${this.item.cta.url}">${this.item.cta.text}</a>
    </section>`;
  }
}

window.customElements.define('sif-promo-section', PromoSection);
