import React from 'react';
import productos from '../data/data';
import MyButton from '../mybutton/MyButton';
import "./item.css"

function Item({titulo,precio,descripcion}) {
  return (
    <div>
      <img src={productos.imgUrl}/>
      <h3>{titulo}</h3>
      <h4>{descripcion}</h4>
      <p>${precio}</p>

      <MyButton text= "Agregar al Chango" color= "pink"/>
    </div>
  )
}

export default Item