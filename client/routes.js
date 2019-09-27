import React from 'react';
// import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/home';
import Colors from './components/colors';
import SingleColor from './components/singleColor';
import colorCategory from './components/colorCategory';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/colors" component={Colors} />
      <Route exact path="/colors/:hexName" component={SingleColor} />
      <Route exact path="/red" component={colorCategory} />
      <Route exact path="/orange" component={colorCategory} />
      <Route exact path="/yellow" component={colorCategory} />
      <Route exact path="/green" component={colorCategory} />
      <Route exact path="/blue" component={colorCategory} />
      <Route exact path="/purple" component={colorCategory} />
      <Route exact path="/brown" component={colorCategory} />
      <Route exact path="/gray" component={colorCategory} />
    </Switch>
  );
};

export default withRouter(Routes);
