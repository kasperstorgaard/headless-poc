import {LitElement, html, property} from '@polymer/lit-element';
import {Steps as StepsModel} from 'headless-poc-server/dist/types';

class Steps extends LitElement {
  @property({type: String})
  theme: string = 'primary';

  @property({type: Object})
  item: StepsModel|null = null;

  protected render() {
    if (!this.item) {
      return html``;
    }

    return html`
    <link rel="stylesheet" href="/static/styles/reset.css">
    <link rel="stylesheet" href="/static/elements/section.css">
    <link rel="stylesheet" href="/static/elements/button.css">
    <style>
      :host {
        display: block;
      }

      .list {
        display: flex;
        flex-direction: column;
      }

      @media(min-width: 768px) {
        section {
          max-width: var(--size-xl);
        }

        .list {
          flex-direction: row;
        }
      }

      .step {
        display: flex;
        align-items: center;
        margin-bottom: 2em;
      }

      .illustration {
        margin-right: 1.5em;
        width: 67px;
        height: 67px;
      }

      .step-headline,
      .step-text {
        margin: 0;
        padding: 0;
      }

      .step-headline {
        font-weight: 700;
        line-height: 1.5em;
        font-size: 1em;
      }

    </style>
    <section class="sif-section theme-${this.theme}">
      <ul class="list">
        ${this.item.items.map(step => html`
        <li class="step">
          <img class="illustration" src="${step.illustrationThumbnail}">
          <div>
            <h3 class="step-headline">${step.headline}</h3>
            <p class="step-text">${step.summary}</p>
          </div>
        </li>
        `)}
      </ul>
      <a class="cta sif-button" href="${this.item.cta.url}">${this.item.cta.text}</a>
    </section>`;
  }
}

window.customElements.define('sif-steps', Steps);
