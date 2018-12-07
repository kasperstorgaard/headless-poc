import { html, property } from '@polymer/lit-element';
import { connect } from 'pwa-helpers/connect-mixin';

import { PageViewElement } from '../shared/page-view-element';

// This element is connected to the Redux store.
import { store, RootState } from '../../store';

// store.addReducers({
//   counter
// });

// These are the shared styles needed by this element.
import { SharedStyles } from '../shared/shared-styles';

class Page2 extends connect(store)(PageViewElement) {
  protected render() {
    return html`
      ${SharedStyles}
      <section>
        <h2>Redux example: simple counter</h2>
        <div class="circle">${this._value}</div>
        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
        element is not built in a Redux-y way (you can think of it as being a
        third-party element you got from someone else), but this page is connected to the
        Redux store. When the element updates its counter, this page updates the values
        in the Redux store, and you can see the current value of the counter reflected in
        the bubble above.</p>
        <br><br>
      </section>
      <section>
        <p>
          counter element goes here
          <!-- <counter-element value="${this._value}" clicks="${this._clicks}"
              @counter-incremented="${this._counterIncremented}"
              @counter-decremented="${this._counterDecremented}">
          </counter-element> -->
        </p>
      </section>
    `;
  }

  @property({type: Number})
  private _clicks = 0;

  @property({type: Number})
  private _value = 0;

  private _counterIncremented() {
    // store.dispatch(increment());
  }

  private _counterDecremented() {
    // store.dispatch(decrement());
  }

  // This is called every time something is updated in the store.
  stateChanged(_state: RootState) {
    // this._clicks = state.counter!.clicks;
    // this._value = state.counter!.value;
  }
}

window.customElements.define('sif-page2', Page2);
