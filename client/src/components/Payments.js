import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Chunk Learning"
        description="$5 for credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <button className="btn">Add Credit</button>
      </StripeCheckout>
    );
  }
}

export default Payments;
