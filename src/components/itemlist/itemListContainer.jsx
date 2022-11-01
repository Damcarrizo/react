import Item from './Item'
import "./item.css"


function ItemListContainer(props) {
  return (
    <div>
<h1> {props.greeting}</h1>
<Item producto= "Mosqueton N1" precio= "$250"/>
<Item producto= "Mosqueton N1" precio= "$400"/>
<Item producto= "Mosqueton N1" precio= "$610"/>
<Item producto= "Mosqueton N1" precio= "1050"/>
    </div>
  )
}

export default ItemListContainer