import React from 'react';
// import {connect} from 'react-redux'
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Colors from './components/colors';
import SingleColor from './components/singleColor';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/colors" component={Colors} />
      <Route exact path="/colors/:hexName" component={SingleColor} />
    </Switch>
  );
};

export default Routes;
