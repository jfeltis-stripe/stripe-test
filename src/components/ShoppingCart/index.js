import React from 'react';

import './style.css';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className={`shopping-cart-container ${this.props.isOpen ? 'open' : ''}`}>
        <h1>Cart</h1>
        <div className="shopping-cart-inner-container">
          {
            this.props.items.length > 0
              ? this.props.items.map((i, x) => {
                return (
                  <div className="cart-item" key={`cart-item-${x}`}>
                    <div className="cart-item-inner-container">
                      <img className="cart-item-img" src={i.src} alt="cart item"></img>
                      <div className="cart-item-title">{i.title}</div>
                    </div>
                    <div className="cart-item-price">
                      ${i.price}
                      <button
                        className="button remove-item-button"
                        data-id={i.id}
                        onClick={this.props.onRemoveCartItemClick}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                );
              })
              : <div className="empty-cart">Cart is empty!</div>
          }
          <div className="shopping-cart-total-container">
            Total: ${this.props.total === 0 ? '0' : this.props.total}
            <button
              className="button checkout-button"
              disabled={this.props.checkoutButtonDisabled}
            >
              Checkout with
              <i className="fab fa-cc-stripe"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;