import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Blog, Post } from './pages';

const routes = [
  <Route key="login" exact path="/" component={Home} />,
  <Route key="blog" exact path="/blog" component={Blog} />,
  <Route key="post" path="/blog/:slug" component={Post} />,
];

export default routes;
