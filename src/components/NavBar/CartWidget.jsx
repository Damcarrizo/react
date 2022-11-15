import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 

import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div><FontAwesomeIcon icon={faCartShopping} />
    <span className='badge badge-warning' id='lblCartCount'> 4 </span>
    </div>
  )
}

export default CartWidget

