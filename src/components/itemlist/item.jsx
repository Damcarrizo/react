import React from "react";
import productos from "../data/data";
import MyButton from "../mybutton/MyButton";
import "./item.css";
import { Link } from "react-router-dom";

function Item({ titulo, precio, descripcion, id }) {
  const urlDetail = `/detail/${id}`;
  return (
    <div className="cardContainer">
      <div className="card-img">
        <img src={productos.imgUrl} />
      </div>
      <div className="card-detail">
        <h3>{titulo}</h3>
        <h4>{descripcion}</h4>
        <p>${precio}</p>
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
