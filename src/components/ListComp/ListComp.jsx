import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ItemComp from '../ItemComp/ItemComp';


function ListComp() {

  const dispatch = useDispatch();

  // let [addFavorite, setAddFavorite] = useState();

  const result = useSelector((store) => store.resultReducer)
  console.log(result)

  const setFavorite = (gif) => {
    
    dispatch({
      type: 'NEW_FAVORITE',
      payload: gif.images.original.url
    })
  }

  console.log(setFavorite);

  return (
    <div>

      <ItemComp result={result} />
      <table>
      <tbody>
        {result.map((gif) => {
          return (
             
              <tr key={gif.id}>
                <td>
                  <img src={gif.images.original.url}></img>
                  <button onClick={(event) => setFavorite(gif)}>heart</button>
                  </td>
              </tr>
            
          )
          
        })}
        </tbody>
      </table>

    </div>
  );
}

export default ListComp;


