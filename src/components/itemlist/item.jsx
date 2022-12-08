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
      <div className="card-button">
        <Link to={urlDetail}>
          <MyButton text="Ver Mas" color="red" />
        </Link>
      </div>
    </div>
  );
}

export default Item;
