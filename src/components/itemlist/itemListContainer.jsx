import { useState, useEffect } from "react";

import Item from './item';
import "./item.css";
import {useParams} from "react-router-dom";
import getItems from "../Services/mockService";

function ItemListContainer() {
  const [productos, setProducts] = useState([]);
  const { id } = useParams();

  async function getItemsAsync() {
    let respuesta = await getItems(id);
    setProducts(respuesta);
  }

  useEffect(() => {
    getItemsAsync();
  }, [id]);

  return (


<div className="cardList">
{productos.map((productos)=>{
  return(
    <Item
      key={productos.id}
      id={productos.id}
      titulo ={productos.titulo}
      precio ={productos.precio}
      descripcion={productos.descripcion}
      />
  )
})}
    </div>
  )
}

export default ItemListContainer