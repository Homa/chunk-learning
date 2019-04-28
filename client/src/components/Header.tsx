import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Payments from './Payments';

interface IProps {
  auth: any;
}

interface IState {
  state: any;
}

class Header extends Component<IProps, IState> {

  renderContent() {
    switch (this.props.auth) {
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
          <li key="1"><Payments/></li>,
          <li key="2" style={{margin: '0 10px'}}>Credits: {this.props.auth.credits}</li>,
          <li key="3"><a href="/api/logout">Log out</a></li>
        ];
    }
  }

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state: IState) {
  return state;
}

export default connect(mapStateToProps, actions)(Header);
