import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';
import { connect } from 'react-redux';

interface IProps {
  handleToken: any;
}

class Payments extends Component<IProps> {
  render() {
    return (
      <StripeCheckout
        name="Chunk Learning"
        description="$5 for credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY || ''}>
        <button className="btn">Add Credit</button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);
