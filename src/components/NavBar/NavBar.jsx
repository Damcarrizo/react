import React from 'react';
import "./navBar.css";
import CartWidget from './CartWidget';


function NavBar() {
  return (
      <div className="navbar-container">
    <nav >
        <ul className='list-container'>
            <li> <a href='/'> Mosqueton </a></li>
            <li> <a href='/'> Bolitas </a></li>
            <li> <a href='/'> Capuchones </a></li>
            <li> <a href='/'><CartWidget/> </a> </li>
        </ul>
    </nav>
    </div>
  )
}

export default NavBar 