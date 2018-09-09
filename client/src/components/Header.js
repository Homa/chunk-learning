import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Payments from './Payments';

class Header extends Component {

  renderContent() {
    switch(this.props.auth) {
      case false:
        // not logged in
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      case null:
        // waithing for api call
        return;
      default:
        return [
          <li key="1"><Payments></Payments></li>,
          <li key="2"><a href="/api/logout">Log out</a></li>
        ];
    }

  }
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Header);
