import React from 'react';
// import {connect} from 'react-redux'
import { Route, Switch, withRouter } from 'react-router-dom';
import Colors from './components/colors';
import SingleColor from './components/singleColor';
import colorCategory from './components/colorCategory';

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Colors} />
      <Route exact path="/colors/:hexName" component={SingleColor} />

      <Route exact path="/Red" component={colorCategory} />
      <Route exact path="/Orange" component={colorCategory} />
      <Route exact path="/Yellow" component={colorCategory} />
      <Route exact path="/Green" component={colorCategory} />
      <Route exact path="/Blue" component={colorCategory} />
      <Route exact path="/Purple" component={colorCategory} />
      <Route exact path="/Brown" component={colorCategory} />
      <Route exact path="/Gray" component={colorCategory} />
    </Switch>
  );
};

export default withRouter(Routes);
