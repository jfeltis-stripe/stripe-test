# stripe-test

## Overview
This web application is a demonstration of **[Stripe's Checkout](https://stripe.com/docs/checkout)** product in an ecommerce environment.

## Approach
Using only client-side technologies (HTML, CSS, and JavaScript), this application renders a product listing, shopping cart, checkout form, and confirmation receipt while supporting interactivity with these elements. Ecommerce requires great attention to the user's experience as it could make or break the sale. Modern client-side technologies are well-suited for developing simple, extensible controls that can lead to improved user engagement.

## Technology Stack
As mentioned, this application uses only client-side technologies
- **HTML**
- **CSS**
- **JavaScript ([React.js](https://reactjs.org/) and vanilla)**
- **[Stripe Checkout](https://stripe.com/docs/checkout)**

**[React.js](https://reactjs.org/)** is a powerful framework for building highly responsive web applications as well as contributing to developer productivity. React's rendering methods allow for easy state management and synchronization which contributes to an enhanced user interface.

**[Stripe Checkout](https://stripe.com/docs/checkout)** is easily implemented in JavaScript allowing for a dynamic checkout experience for the user. Checkout is flexible in that it can accept multiple arguments for customizing the resulting modal dialog component. Another benefit of Checkout is reduced PCI burden. By communicating solely between the user's browser and Stripe's servers, a Stripe merchant can limit exposure of this sensitive data, therefore, limiting the security requirements placed on the merchant's enterprise.

## Future Development
A future release of this software might include the addition of a web server (Node.js, Express, MongoDB) used for commiting orders, users, and Stripe tokens to a database.

Additional error handling, edge case coverage, design tweaks, and more sophisticated shopping cart interaction could also be implemented.