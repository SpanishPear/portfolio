import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Blog, Post, Project, Resume } from './pages';

const routes = [
  <Route key="login" exact path="/" component={Home} />,
  <Route key="blog" exact path="/blog" component={Blog} />,
  <Route key="post" path="/blog/:slug" component={Post} />,
  <Route key="construction" path="/projects" component={Project} />,
  <Route key="construction" path="/resume" component={Resume} />,
];

export default routes;
