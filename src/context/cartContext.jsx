import { createContext } from "react";

export const cartContext = createContext();


export function CartContextProvider ({children}){
    const itemsInCart = 3 

    return(
        <cartContext.Provider value={{itemsInCart}}>
            {children}
        </cartContext.Provider>
    )
}