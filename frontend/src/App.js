import React from 'react';
import './styles/app.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './assets/components/Home';
import Login from './assets/components/Login';
import NotFound from './assets/components/NotFound';
import Register from './assets/components/Register';

export default function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" name="Login" render={props => <Login {...props}/>} />
          <Route exact path="/register" component={Register}/>
          <Route path="*" component={NotFound}/>
      </Switch>
    </Router>
  );
}

