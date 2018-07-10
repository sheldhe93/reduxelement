import React from 'react';
import ReactDOM from 'react-dom';

import Root from './client/Root';

import './styles/base.scss';
import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

// const store = createStore(reducers);
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>, document.getElementById('root')
);
