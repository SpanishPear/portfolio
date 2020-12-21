import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Blog } from '../pages';

const routes = [
  <Route key="login" exact path="/" component={Home} />,
  <Route key="blog" exact path="/blog" component={Blog} />,
];

export default routes;
