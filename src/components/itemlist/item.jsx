import React from 'react';
import productos from '../data/data';
import MyButton from '../mybutton/MyButton';
import "./item.css";
import{Link} from "react-router-dom";

function Item({titulo,precio,descripcion,id}) {
  const urlDetail = `/detail/${id}`;
  return (
    <div>
      <img src={productos.imgUrl}/>
      <h3>{titulo}</h3>
      <h4>{descripcion}</h4>
      <p>${precio}</p>

      <MyButton text= "Agregar al Chango" color= "pink"/>
      <Link to={urlDetail}>
      <MyButton text= "Ver Mas" color= "Green"/>
      </Link>
    </div>
  )
}

export default Item