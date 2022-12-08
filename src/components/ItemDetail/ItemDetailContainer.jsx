
import {getSingleItem} from '../../components/Services/mockService';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from './ItemDetail';
import "./itemDetail.css"


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
    return <ItemDetail product={productos}/>;
}

export default ItemDetailContainer