import ItemContador from "../ItemContador/ItemContador";
import "./itemDetail.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

function ItemDetail({ product }) {
  
  const {addToCart} = useContext(cartContext)

  function onAddToCArt(count) {
    alert(`agregaste ${count} al carro`);
    addToCart(product,count);
  }

  return (
    <div className="cardDetail">
      <div className="card-detail">
        <img src={product.imgurl} alt="Producto img" />
      </div>
      <div className="card-detail">
        <h2>{product.titulo}</h2>
        <p>{product.descripcion}</p>
        <h4>$ {product.precio}</h4>
      </div>
      <ItemContador onAddToCArt={onAddToCArt} stock={product.stock} />
    </div>
  );
}

export default ItemDetail;
