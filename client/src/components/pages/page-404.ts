import {html} from '@polymer/lit-element';
import {PageViewElement} from '../shared/page-view-element';

// These are the shared styles needed by this element.
import {SharedStyles} from '../shared/shared-styles';

class Page404 extends PageViewElement {
  protected render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>The page you're looking for doesn't seem to exist. Head back
           <a href="/">home</a> and try again?
        </p>
      </section>
    `
  }
}

window.customElements.define('sif-page404', Page404);
