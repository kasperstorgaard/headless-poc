import { html, property } from '@polymer/lit-element';

import { connect } from 'pwa-helpers/connect-mixin';

// This element is connected to the Redux store.
import { store, RootState } from '../store';

import { PageViewElement } from './page-view-element';

// We are lazy loading its reducer.
// store.addReducers({
//   shop
// });

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles';
import { addToCartIcon } from './my-icons';

class MyView3 extends connect(store)(PageViewElement) {
  protected render() {
    return html`
      ${SharedStyles}
      <style>
        button {
          border: 2px solid var(--app-dark-text-color);
          border-radius: 3px;
          padding: 8px 16px;
        }
        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }
        .cart, .cart svg {
          fill: var(--app-primary-color);
          width: 64px;
          height: 64px;
        }
        .circle.small {
          margin-top: -72px;
          width: 28px;
          height: 28px;
          font-size: 16px;
          font-weight: bold;
          line-height: 30px;
        }
      </style>

      <section>
        <h2>Redux example: shopping cart</h2>
        <div class="cart">${addToCartIcon}<div class="circle small">${this._quantity}</div></div>
        <p>This is a slightly more advanced Redux example, that simulates a
          shopping cart: getting the products, adding/removing items to the
          cart, and a checkout action, that can sometimes randomly fail (to
          simulate where you would add failure handling). </p>
        <p>This view, as well as its 2 child elements, <code>&lt;shop-products&gt;</code> and
        <code>&lt;shop-cart&gt;</code> are connected to the Redux store.</p>
      </section>
      <section>
        <h3>Products</h3>
        <shop-products></shop-products>

        <br>
        <h3>Your Cart</h3>
        <shop-cart></shop-cart>

        <div>${this._error}</div>
        <br>
        <p>
          <button ?hidden="${this._quantity == 0}" @click="${this._checkoutButtonClicked}">
            Checkout
          </button>
        </p>
      </section>
    `;
  }

  @property({type: Number})
  private _quantity = 0;

  @property({type: String})
  private _error = '';

  private _checkoutButtonClicked() {
    // store.dispatch(checkout());
  }

  // This is called every time something is updated in the store.
  stateChanged(_state: RootState) {
    // this._quantity = cartQuantitySelector(state);
    // this._error = state.shop!.error;
  }
}

window.customElements.define('my-view3', MyView3);
