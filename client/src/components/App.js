import React, { Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";
import { connect } from 'react-redux';
import * as actions from '../actions'
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>

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
