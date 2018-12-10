import {LitElement, html, property} from '@polymer/lit-element';

import {StepsSection as StepsSectionItem} from '../../../../../../server/src/content/models/steps-section';

class StepsSection extends LitElement {
  @property({type: Object})
  item: StepsSectionItem|null = null;

  protected render() {
    if (!this.item) {
      return html``;
    }

    return html`
    <section>
      <ul class="list">
        ${this.item.steps.map(step => html`
        <li class="step">
          <img class="illustration" src="${step.illustrationThumbnail}">
          <div class="step-body">
            <h3 class="step-headline">${step.headline}</h3>
            <p class="step-text">${step.summary}</p>
          </div>
        </li>
        `)}
      </ul>
      <a class="cta" href="${this.item.cta.url}">${this.item.cta.text}</a>
    </section>`;
  }
}

window.customElements.define('sif-steps-section', StepsSection);
