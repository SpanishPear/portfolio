import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages';

const routes = [<Route key="login" exact path="/" component={Home} />];

export default routes;
