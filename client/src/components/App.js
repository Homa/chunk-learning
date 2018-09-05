import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';
import * as actions from '../actions'

const Header = () => {
  return(
    <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/auth/google">Login with Google</a></li>
          </ul>
        </div>
      </nav>
  );
}
const Dashboard = () => <h2>Dashboard</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route exact path="/dashboard" component={Dashboard}></Route>
            <Route exact path="/" component={Landing}></Route>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
