import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux';


function FormComp() {
  
  const [search, setSearch] = useState('')
  const dispatch = useDispatch();
  
  
  const searchFunction = (event) => {
    // console.log(search);
    dispatch({
      type: 'FETCH_RESULT',
      payload : search
    })
  }



  return (
    <div>
      <input
        placeholder="search"
        onChange={(event) => setSearch(event.target.value)}
        value={search}></input>
      <button onClick={searchFunction}>submit</button>
    </div>
  );
}

export default FormComp;

