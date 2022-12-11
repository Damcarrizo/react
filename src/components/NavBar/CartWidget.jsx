
import React,{useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  const miContext = useContext(cartContext)
  const numCart = Number(miContext.itemsInCart())

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
      {
        numCart >=1?
    <span className='badge badge-warning' id='lblCartCount'>{miContext.itemsInCart()}</span> : <span></span>
}
    </div>
  );
}

export default CartWidget

