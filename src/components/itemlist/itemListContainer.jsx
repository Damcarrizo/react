import { useState, useEffect } from "react";
import "./item.css";
import {useParams} from "react-router-dom";
import getItems, { getItemsByCategory } from "../Services/firestore";
import ItemList from "./ItemList"
import Loader from "../Loader/loader";

function ItemListContainer() {
  const [productos, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  
  const { id } = useParams();

  async function getItemsAsync() {
    if (!id) {
    let respuesta = await getItems(id);
    setProducts(respuesta);
            
  } else {
      let respuesta = await getItemsByCategory(id)
      setProducts(respuesta);
  }
setIsLoading(false);
}

useEffect(
  () => {
      getItemsAsync();
  }, [id]);

if (isLoading)
  return (<div><Loader /></div>)

return (<ItemList productos={productos} />)

}

export default ItemListContainer