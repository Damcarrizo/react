import React, {useContext} from 'react';
import { cartContext } from '../../context/cartContext';
import MyButton from '../mybutton/MyButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { createOrder } from '../Services/firestore';
import {useNavigate} from "react-router-dom";
import CartForm from './CartForm';



function CartView() {
    const{ cart, removeItem, clear, priceInCart} = useContext(cartContext)
    let navigate = useNavigate();

    if (cart.length === 0) return (<h1>Carrito Vacio</h1>)

    async function handleCheckOut(evt,data){

      const order = {
        buyer: data,
        items: cart,
        total: 0,
        date: new Date(),
      };
  
      const orderId = await createOrder(order);
      navigate(`/thankyou/${orderId}`);
    }

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
                <CartForm onSubmit = {handleCheckOut}/>
    </div>
  )
}


export default CartView