import React from 'react';
import FavItemComp from '../FavItemComp/FavItemComp';
import { useSelector } from 'react-redux';


function FavListComp() {

  const favList = useSelector(store => store.favoriteReducer)


  return (
    <div>
        {favList.map((gif) => {
          <FavItemComp 
          key={gif.id}
          gif={gif}
          />
        })}
    </div>
  );
}

export default FavListComp;