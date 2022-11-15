import productos from "../data/data"

function getItems(id) {
    return new Promise((resolve) => {
      if (id === undefined) {
        setTimeout(() => {
          resolve(productos);
        }, 2000);
      } else {
        setTimeout(() => {
          let itemsRequested = productos.filter(
            (item) => item.categoria === id
          );
          resolve(itemsRequested);
        }, 2000);
      }
    });
  }

export function getSingleItem(idParam) {
    return new Promise ((resolve,reject) =>{
        let encontrar = productos.find((item)=> item.id === parseInt(idParam))
        if(encontrar=== undefined) reject ("item no encontrado")
      setTimeout(() =>{
          resolve (encontrar);
      },2000);
    });
}

export default getItems;