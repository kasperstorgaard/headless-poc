import {LitElement, property, html} from '@polymer/lit-element';

class CatalogueExample extends LitElement {
  @property({type: String})
  category: string;

  protected render() {
    return html`
      <link rel="stylesheet" href="static/blocks/section.css"></link>
      <style>
        :host {
          display: block;
        }
      </style>
      <section class="sif-section">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <div class="body">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

window.customElements.define('sif-catalogue-example', CatalogueExample);
