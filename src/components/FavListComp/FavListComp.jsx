import React from 'react';
import FavItemComp from '../FavItemComp/FavItemComp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function FavListComp() {

  const favList = useSelector(store => store.favoriteReducer)

  // useEffect(() => { // Populate table upon view load (is this description correct?)
  //   console.log('useEffect GET');

  // }, []);


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