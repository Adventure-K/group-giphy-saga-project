import React from 'react';
import FormComp from '../FormComp/FormComp';
import ListComp from '../ListComp/ListComp';
import ItemComp from '../ItemComp/ItemComp';
import FavItemComp from '../FavItemComp/FavItemComp';
import FavListComp from '../FavListComp/FavListComp';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


function App(props) {
  return (
    <Router>
      <Route path='/' exact>
        <div>
          <h1>Giphy Search!</h1>
          <FormComp />
          <ListComp />
          <h4>
            <Link to='/favorite'>Favorites!</Link>
          </h4>
        </div>
      </Route>
      <Route path={'/favorite'}>
        <FavListComp />
      </Route>
    </Router>
  );
}

export default App;
