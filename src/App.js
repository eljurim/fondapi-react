import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import './App.css';
import Register from './components/register/Register'
import Login from './components/login/Login'
import Home from './components/Home/Home'
import DishAdd from './components/DishAdd/DishAdd'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/home' exact component={Home} />  
          <Route path='/login' exact component={Login} />  
          <Route path='/register' exact component={Register} />  
          <Route path='/dish/add' exact component={DishAdd} />  
        </Switch>
      </div>
    );
  }
}

export default App;
