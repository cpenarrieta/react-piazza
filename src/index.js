import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Questions from './Questions';
import NoMatch from './NoMatch';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render(
  (<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="questions" component={Questions}/>
    <Route path="*" component={NoMatch}/>
  </Router>),
  document.getElementById('root')
);
