import React from 'react';

import './style.css';

class Receipt extends React.Component {
  render() {
    return (
      <div className={`receipt-container ${this.props.isOpen ? 'open' : ''}`}>
        <h1>Receipt</h1>
        <div className="receipt-inner-container">
          <h1>Thank you!</h1>
          <h1>Order #: {this.props.invoiceNumber}</h1>
          <h1>Order Total: ${this.props.total}</h1>
        </div>
      </div>
    );
  }
}

export default Receipt;