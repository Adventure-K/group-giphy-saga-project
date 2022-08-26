import { useSelector } from 'react-redux';
import ItemComp from '../ItemComp/ItemComp';

function ListComp() {

  const result = useSelector((store) => store.resultReducer)
  console.log(result)



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
                  <button>heart</button>
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


