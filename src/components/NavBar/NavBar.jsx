import React from 'react';
import "./navBar.css";
import CartWidget from './CartWidget';
import {Link} from "react-router-dom";

function NavBar() {
  return (
      <div className="navbar-container">
    <nav >
        <ul className='list-container'>
            <li> <Link to='/'> Productos</Link></li>
            <li> <Link to='/categoria/cierres'> Cierres</Link></li>
            <li> <Link to='/categoria/bolita'> Bolitas </Link></li>
            <li> <Link to='/'>  + Info</Link></li>
            <li> <Link to='/cart'><CartWidget/> </Link> </li>
        </ul>
    </nav>
    </div>
  )
}

export default NavBar 