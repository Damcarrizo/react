
import {getSingleItem} from '../../components/Services/mockService';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [productos, setProducto] = useState([])
  const {id} = useParams();

async function getItemsAsync(){
    let respuesta = await getSingleItem(id);
    setProducto(respuesta)
}
useEffect(()=>{
    getItemsAsync();
},[]);
    return (
        <div>
<img src={productos.imgUrl}/>
      <h3>{productos.titulo}</h3>
      <h4>{productos.precio}</h4>
      <p>{productos.descripcion}</p>
      </div>
      );
}

export default ItemDetailContainer