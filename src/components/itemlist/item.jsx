import React from "react";
import productos from "../data/data";
import MyButton from "../mybutton/MyButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ titulo, precio, descripcion, stock, id, descuento, color}) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="cardContainer">
      <div className="card-img">
        <img src={productos.imgUrl} />
      </div>
      <div className="card-detail">
        <h3>{titulo}</h3>
        <h4>{descripcion}</h4>
        <p style={{color: descuento && "green"}}>${precio}</p>
        {descuento && <small>Descuento: {descuento}</small>}
        {stock <= 0 && <span>Sin stock disponible</span>}
      </div>
      <div>
        <Link className="card-button" to={urlDetail}>
          <MyButton>Ver Mas</MyButton>
        </Link>
      </div>
    </div>
  );
}

export default Item;
