import Item from './item'
import "./item.css"
import productos from '../data/data'

function ItemListContainer(props) {
  return (
    <div>
<h1> {props.greeting}</h1>
{productos.map((productos)=>{
  return(
    <Item
      key={productos.id}
      titulo ={productos.titulo}
      precio ={productos.precio}
      descripcion={productos.descripcion}
      />
  )
})}
    </div>
  )
}

export default ItemListContainer