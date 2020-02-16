import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Erro } from './components';
export default function App(){
  return(
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Home}/>
          <Route path="*" component={Erro}/>
        </Switch>
      </Router>
    </>
  );
}