import React from 'react';
import FormComp from '../FormComp/FormComp';
import ListComp from '../ListComp/ListComp';
import ItemComp from '../ItemComp/ItemComp';
import FavItemComp from '../FavItemComp/FavItemComp';
import FavListComp from '../FavListComp/FavListComp';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <FormComp />
      <ListComp />
      <FavListComp />
    </div>
  );
}

export default App;
