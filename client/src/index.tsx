import 'bulma/css/bulma.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux'; // glue between redux and react
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers , {}, applyMiddleware(reduxThunk));

ReactDom.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
