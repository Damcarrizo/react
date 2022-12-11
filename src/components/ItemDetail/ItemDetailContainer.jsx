
import {getSingleItem} from '../../components/Services/firestore';
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";
import ItemDetail from "./ItemDetail";
import "./itemDetail.css";
import Loader from '../Loader/loader';


function ItemDetailContainer() {
    const [productos, setProducto] = useState([])

    const [isLoading, setIsLoading] = useState(true);

    const {id} = useParams();
  
  async function getItemsAsync(){
      getSingleItem(id).then(respuesta=>{
        setProducto(respuesta);
        setIsLoading(false)
      });
  }
  useEffect(()=>{
      getItemsAsync();
  },[]);
  
  if(isLoading)
  return (<Loader/>);

      return( 
      <ItemDetail product={productos}/>
      )
  }
  
  export default ItemDetailContainer