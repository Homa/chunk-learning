import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "materialize-css/dist/css/materialize.min.css";

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
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header></Header>
          <Route exact path="/dashboard" component={Dashboard}></Route>
          <Route exact path="/surveyNew" component={SurveyNew}></Route>
          <Route exact path="/" component={Landing}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
