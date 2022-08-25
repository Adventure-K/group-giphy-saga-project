import React from 'react';
import FormComp from '../FormComp/FormComp';
import ListComp from '../ListComp/ListComp';
import ItemComp from '../ItemComp/ItemComp';

function App(props) {
  return (
    <div>
      <h1>Giphy Search!</h1>
      <FormComp />
      <ListComp />
    </div>
  );
}

export default App;
