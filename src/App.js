import React from 'react';
import {Route, Switch } from 'react-router-dom';

// import Header from './Components/Header';
// import PopularSongs from './pages/PopularSongs';
// import Cart from './pages/Cart';
// import Styles from './pages/Styles';
// import SongDetail from './Components/SongDetail';
// import SpecificSongs from './Components/SpecificSongs';
// import AddForm from './pages/Add';
// import Menu from './Components/Menu';

import Home from './pages/Home';

export default function App() {
  return (
    <div>
     <Switch>
          <Route exact path="/">
              <Home />
          </Route>
      </Switch>
    </div>
  )
}


/* <Header />
      <Menu /> */
          /* <Route exact path="/styles">
              <Styles />
          </Route>
          <Route path="/styles/:style">
              <SpecificSongs />
          </Route>
          <Route path="/add">
            <AddForm />
          </Route>
          <Route path="/cart">
              <Cart />
          </Route>
          <Route path="/songs/:id">
              <SongDetail />
          </Route> */
     