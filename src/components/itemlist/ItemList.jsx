import React from "react";
import Item from "./item";

function ItemList({ productos }) {
  return (
    <div className="cardList">
      {productos.map((productos) => {
        return (
          <Item
            key={productos.id}
            id={productos.id}
            titulo={productos.titulo}
            precio={productos.precio}
            stock= {productos.stock}
            descripcion={productos.descripcion}
            descuento ={productos.descuento}
          />
        );
      })}
    </div>
  );
}

export default React.memo (ItemList)