import React from 'react'
import CartWidget from './CartWidget'

function NavBar() {
  return (
    <nav>
        <ul>
            <li><h2> Catalogo </h2></li>
            <li> <a href='/'> Mosqueton </a></li>
            <li> <a href='/'> Bolitas </a></li>
            <li> <a href='/'> Capuchones </a></li>
            <li> <CartWidget/> </li>
        </ul>
    </nav>
  )
}

export default NavBar 