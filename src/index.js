import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch } from 'react-router-dom';
import routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Switch>{routes}</Switch>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
