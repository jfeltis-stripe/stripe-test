import React from 'react';

import './style.css';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1 className="product-title">{this.props.title}</h1>
        <img className="product-img" src={this.props.imgsrc} alt={this.props.imgalt} />
        <div className="product-desc">{this.props.description}</div>
        <button className="button button-green" onClick={this.props.onAddProductToShoppingCartClick}>
          <div className="product-price">${this.props.price}</div>
        </button>
      </div>
    );
  }
}

export default Product;