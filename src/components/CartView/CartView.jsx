import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import MyButton from '../mybutton/MyButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';



function CartView() {
    const{ cart, removeItem, clear, priceInCart} = useContext(cartContext)

    if (cart.length === 0) return (<h1>Carrito Vacio</h1>)
  return (
    <div className='cart-container'>
        {
            cart.map((item)=>( 
            <div key={item.id}>
                <h2>{item.titulo}</h2>
                <h4>${item.precio}</h4>
                <h4>Unidades{item.count}</h4>
                <button onClick={()=>removeItem(item.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
            </div>       
                ))}
                <MyButton onClick={()=>clear()}>Vaciar Carrito</MyButton>
    </div>
  )
}


export default CartView