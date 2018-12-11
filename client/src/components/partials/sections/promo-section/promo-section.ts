import {LitElement, html, property} from '@polymer/lit-element';

import {PromoSection as PromoSectionItem} from '../../../../../../server/src/content/models/promo-section';

class PromoSection extends LitElement {
  @property({type: Object})
  item: PromoSectionItem|null = null;

  @property({type: String})
  theme: string = 'secondary';

  protected render() {
    if (!this.item) {
      return html``;
    }

    return html`
    <link rel="stylesheet" href="/static/styles/typography.css">
    <link rel="stylesheet" href="/static/blocks/section.css">
    <link rel="stylesheet" href="/static/blocks/button.css">
    <style>
      section {
        min-height: 26em;
        text-align: center;
        background-position: center;
        background-size: cover;
      }

      .headline, .body, .cta {
        max-width: 270px;
      }
    </style>
    <section class="sif-section theme-${this.theme}" style="background-image: url(${this.item.backgroundImage})">
      <h1 class="sif-section-headline headline">${this.item.headline}</h1>
      <p class="body">${this.item.body}</p>
      <a class="cta sif-button" href="${this.item.cta.url}">${this.item.cta.text}</a>
    </section>`;
  }
}

window.customElements.define('sif-promo-section', PromoSection);
