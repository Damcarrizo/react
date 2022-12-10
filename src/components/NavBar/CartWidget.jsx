
import React,{useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";


function CartWidget() {
  const miContext = useContext(cartContext)
  
  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping} />
    <span className='badge badge-warning' id='lblCartCount'>{miContext.itemsInCart()}</span>
    </div>
  );
}

export default CartWidget

