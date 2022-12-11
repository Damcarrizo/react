import ItemContador from "../ItemContador/ItemContador";
import "./itemDetail.css";
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import MyButton from "../mybutton/MyButton";
import { Link } from "react-router-dom";

function ItemDetail({ product }) {
  const [isInCart, setIsInCart]= useState(false)
  
  const {addToCart} = useContext(cartContext)

  function onAddToCArt(count) {
    alert(`agregaste ${count} al carro`);
    setIsInCart(count);
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
      {
        isInCart?
      <Link to="/cart"> <MyButton>Ir al Carrito</MyButton></Link>
      :
      <ItemContador onAddToCArt={onAddToCArt} stock={product.stock} />
    }
    </div>
  );
}

export default ItemDetail;
