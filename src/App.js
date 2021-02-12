import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Styles from './pages/Styles';
import Menu from './containers/menu';
import SpecificSongs from './pages/specificSongs';
import Lyrics from './pages/lyrics';
import Add from './pages/add';
import Cart from './pages/cart';

export default function App() {
  return (
    <div>
      <h1>Hit Parade</h1>
     <Menu />
     <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route exact path="/styles">
            <Styles />
          </Route>
          <Route path="/styles/:style">
              <SpecificSongs />
          </Route>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
          <Route path="/songs/:id/">
            <Lyrics />
          </Route>
      </Switch>
    </div>
  )
}