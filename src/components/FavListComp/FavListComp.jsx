import React from 'react';
import FavItemComp from '../FavItemComp/FavItemComp';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useDispatch} from 'react-redux';



function FavListComp() {

  const favList = useSelector(store => store.favoriteReducer)
  const dispatch = useDispatch();


  useEffect(() => {
    console.log('useEffect GET');
    dispatch({
      type: 'FETCH_FAVORITE'
    })
    console.log('favList:', favList);
  }, []);


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