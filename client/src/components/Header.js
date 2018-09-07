import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  renderContent() {
    switch(this.props.auth) {
      case false:
        // not logged in
        return (
          <a href="/auth/google">Login with Google</a>
        );
      case null:
        // waithing for api call
        return;
      default:
        return (
          <a href="/api/logout">Log out</a>
        );
    }

  }
  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>{this.renderContent()}</li>
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
