import React from 'react';

import './style.css';

import ShoppingCart from '../ShoppingCart';
import Receipt from '../Receipt';
import Product from './Product';

class ProductListing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoppingCartOpen: false,
      checkoutButtonDisabled: true,
      receiptOpen: false,
      shoppingCartItems: [],
      shoppingCartTotal: 0,
      invoiceNumber: new Date().getTime(),
      invoiceTotal: 0
    };

    this.handleShoppingCartIconClick = this.handleShoppingCartIconClick.bind(this);
    this.handleAddProductToShoppingCartClick = this.handleAddProductToShoppingCartClick.bind(this);
    this.handleRemoveCartItemClick = this.handleRemoveCartItemClick.bind(this);
  }

  componentDidMount(e) {
    const that = this;
    var handler = window.StripeCheckout.configure({
      key: 'pk_test_39LYiNxFouWfwPSRxG5FyC6c',
      image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function (token) {
        that.setState({
          shoppingCartItems: [],
          shoppingCartOpen: false,
          receiptOpen: true
        }, that.calculateCartTotal);
      }
    });

    document.querySelector('.checkout-button').addEventListener('click', (e) => {
      this.setState({
        invoiceTotal: this.state.shoppingCartTotal
      });

      // Open Checkout with further options:
      handler.open({
        name: 'Ribbon, Inc.',
        description: 'Shirts',
        amount: this.state.invoiceTotal * 100
      });
      e.preventDefault();
    });

    // Close Checkout on page navigation:
    window.addEventListener('popstate', () => {
      handler.close();
    });
  }

  handleShoppingCartIconClick(e) {
    this.setState({
      shoppingCartOpen: !this.state.shoppingCartOpen
    });
  }

  handleAddProductToShoppingCartClick(e) {
    let cartItems = this.state.shoppingCartItems,
      currentItem = e.target.parentNode;

    cartItems.push({
      id: new Date().getTime(),
      src: currentItem.querySelector('.product-img').src,
      title: currentItem.querySelector('.product-title').innerHTML,
      price: parseFloat(currentItem.querySelector('.product-price').innerHTML.replace('$', ''))
    });

    this.setState({
      shoppingCartItems: cartItems,
      receiptOpen: false
    }, this.calculateCartTotal);
  }

  handleRemoveCartItemClick(e) {
    let cartItems = this.state.shoppingCartItems;

    cartItems.forEach((i, x) => {
      if (i.id.toString() === e.currentTarget.dataset.id) {
        cartItems.splice(x, 1);

        this.setState({
          shoppingCartItems: cartItems
        }, this.calculateCartTotal);
      }
    });
  }

  calculateCartTotal() {
    let total = 0;

    this.state.shoppingCartItems.forEach((i) => {
      total += i.price;
    });

    this.setState({
      shoppingCartTotal: total,
      checkoutButtonDisabled: this.state.shoppingCartItems.length === 0
    });
  }

  render() {
    return (
      <div className="product-listing">
        <div className="shopping-cart-icon-container">
          <button className="button shopping-cart" onClick={this.handleShoppingCartIconClick}>
            <i className="fas fa-shopping-cart"></i>
            <span className="shopping-cart-item-count">{this.state.shoppingCartItems.length}</span>
          </button>
        </div>
        <ShoppingCart
          isOpen={this.state.shoppingCartOpen}
          checkoutButtonDisabled={this.state.checkoutButtonDisabled}
          items={this.state.shoppingCartItems}
          total={this.state.shoppingCartTotal}
          onRemoveCartItemClick={this.handleRemoveCartItemClick}
        />
        <Receipt
          isOpen={this.state.receiptOpen}
          total={this.state.invoiceTotal}
          invoiceNumber={this.state.invoiceNumber}
        />
        <Product
          title="Invertocat 2.0"
          imgsrc="https://cdn.shopify.com/s/files/1/0051/4802/products/Invertocat_2.0_Mock_GithubShop-M1_480x480_crop_center.jpg?v=1563300713"
          imgalt="Invertocat 2.0"
          price="25"
          description="Invertocat is in stealth mode and is ready for primetime, now with a stylish, more visible front logo."
          onAddProductToShoppingCartClick={this.handleAddProductToShoppingCartClick}
        />
        <Product
          title="Arctocat Shirt"
          imgsrc="https://cdn.shopify.com/s/files/1/0051/4802/products/Arctocat_Mock_GithubShop-M1_480x480_crop_center.jpg?v=1563298117"
          imgalt="Arctocat Shirt"
          price="25"
          description="Pay homage to apex hardware hackers and the Invertocat while keeping the shrapnel at a safe distance with our Arctocat tee in navy."
          onAddProductToShoppingCartClick={this.handleAddProductToShoppingCartClick}
        />
        <Product
          title="I [octocat] Code 2.0 Shirt"
          imgsrc="https://cdn.shopify.com/s/files/1/0051/4802/products/I__octocat__Code_2.0_Mock_GithubShop-M1_600x600.jpg?v=1563297789"
          imgalt="I [octocat] Code 2.0 Shirt"
          price="25"
          description="In the beginning, there was the I :octocat: code shirt. Games were changed, paradigms were shifted, and codes were octocatted."
          onAddProductToShoppingCartClick={this.handleAddProductToShoppingCartClick}
        />
        <Product
          title="GitHub Username Shirt"
          imgsrc="https://cdn.shopify.com/s/files/1/0051/4802/products/Github_Username_Mock_GithubShop-Olive_M1_480x480_crop_center.jpg?v=1563300312"
          imgalt="GitHub Username Shirt"
          price="25"
          description="Do you wish you could turn your clothing into a personal billboard for your GitHub username or project name? Now you can share your open source love right on your back!"
          onAddProductToShoppingCartClick={this.handleAddProductToShoppingCartClick}
        />
        <Product
          title="Atom Shirt"
          imgsrc="https://cdn.shopify.com/s/files/1/0051/4802/products/atom-men_600x600.png?v=1541528434"
          imgalt="Atom Shirt"
          price="25"
          description="Impress friends, family, and fellow time travelers alike with this futuristic Atom shirt. Join the Atom revolution!"
          onAddProductToShoppingCartClick={this.handleAddProductToShoppingCartClick}
        />
        <Product
          title="GitHub Drip Tee"
          imgsrc="https://cdn.shopify.com/s/files/1/0051/4802/products/Github_Drip_Mock_GithubShop-White_M_600x600.jpg?v=1563298413"
          imgalt="GitHub Drip Tee"
          price="25"
          description="Stand out from the crowd and make your wardrobe glow a little brighter with this 90s-inspired tee."
          onAddProductToShoppingCartClick={this.handleAddProductToShoppingCartClick}
        />
      </div>
    );
  }
}

export default ProductListing;