import {LitElement, property, html} from '@polymer/lit-element';

export class PageViewElement extends LitElement {
  @property({type: Boolean})
  active = false;

  private _hash = '';

  hashUpdated(hash: string) {
    if (hash === this._hash || !this.shadowRoot) {
      return;
    }

    this._hash = hash;

    const element = this.shadowRoot.getElementById(hash);

    if (element) {
      element.scrollIntoView();
    }
  }

  // Only render this page if it's actually visible.
  protected shouldUpdate() {
    return this.active;
  }

  protected render() {
    return html`
    <link rel="stylesheet" href="static/shared-styles.css">
    <link rel="stylesheet" href="static/shared-elements.css">
    <style>
      :host(:not([active])) {
        display: none !important;
      }

      :host {
        display: block;
      }
    </style>
    `;
  }
}
