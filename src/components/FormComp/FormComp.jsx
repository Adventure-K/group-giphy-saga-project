import React from 'react';
import {useState} from 'react';

//const [search, setSearch] = useState('')

function FormComp() {
  return (
    <div>
      <input
        placeholder="search"></input>
      <button>submit</button>
    </div>
  );
}

export default FormComp;

//onChange={(event) => setSearch(event.target.value)}
//value={search}