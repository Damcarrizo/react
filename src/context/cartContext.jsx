import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();


export function CartContextProvider ({children}){
    

    const [cart,setCart] = useState([]);

    function addToCart(product,count){
        let ItemAlreadyInCart = cart.findIndex( itemInCart => itemInCart.id === product.id);
        let newCart = [...cart];

        if (ItemAlreadyInCart !== -1){
            newCart[ItemAlreadyInCart].count += count;
            setCart(newCart)


        }
else{
        product.count = count;
        newCart.push(product)
        setCart(newCart)
}
}

function clear(){
    setCart([])
}

function removeItem(idEliminar){
        let newCart = [...cart]; 
        let itemAEliminar = cart.findIndex(productEliminar => productEliminar.id === idEliminar)
        newCart.pop(itemAEliminar) 
        setCart(newCart)
        alert(`Producto ${idEliminar} eliminado`)

}

function itemsInCart() {
    let total = 0;
    cart.forEach((itemInCart) => (total = total + itemInCart.count));
    return total;
  }

function priceInCart(){

}
    return(
        <cartContext.Provider value={{addToCart,cart,itemsInCart,removeItem,clear}}>
            {children}
        </cartContext.Provider>
    )
}