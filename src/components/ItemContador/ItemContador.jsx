import React, {useState} from "react";
import MyButton from "../mybutton/MyButton";


function ItemContador ({stock, onAddToCArt}){
    const [count, setCount] = useState(1);

    function handleAdd (){
        if(count<stock) setCount (count +1);
    }

    function handleResta (){
        if(count>1) setCount (count -1)
    }

    return(
        <div>
            <div className="btn">
                <MyButton onClick={handleResta} colorBtn="red">-</MyButton>
                <span>{count}</span>
                <MyButton onClick={handleAdd} colorBtn="green">
                    +
                </MyButton>
            </div>
            <div className="btn">
                <MyButton onClick={()=>onAddToCArt(count)}>Agregar al Carrito</MyButton>
            </div>
        </div>
    )
}

export default ItemContador