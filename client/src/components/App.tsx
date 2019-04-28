import 'materialize-css/dist/css/materialize.min.css';
import React, { Component} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;

interface IProps {
  fetchUser: any;
}

class App extends Component<IProps> {

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact={true} path="/dashboard" component={Dashboard}/>
            <Route exact={true} path="/" component={Landing}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
