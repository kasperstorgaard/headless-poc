import {LitElement, property, html} from '@polymer/lit-element';

class CatalogueExample extends LitElement {
  @property({type: String})
  name: string;

  protected render() {
    const id = this.name ? this.name.replace(/\s/g, '-') : Math.random();
    return html`
      <link rel="stylesheet" href="static/elements/section.css"></link>
      <style>
        :host {
          display: block;
        }
      </style>
      <section class="sif-section">
        <h2 id="${id}">${this.name}</h2>
        <div class="body">
          <slot></slot>
        </div>
      </section>
    `;
  }
}

window.customElements.define('sif-catalogue-example', CatalogueExample);
