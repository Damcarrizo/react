import React from 'react';
import MyButton from '../mybutton/MyButton';
import "./item.css"

function Item(props) {
  return (
    <div>
      <img src={props.imgUrl}/>
      <p>{props.producto}</p>
      <p>{props.precio}</p>
      <MyButton text= "Agregar al Chango" color= "pink"/>
    </div>
  )
}

export default Item