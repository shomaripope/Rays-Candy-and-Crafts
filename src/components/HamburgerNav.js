import React from 'react'
import { Link } from 'react-router-dom';
import 'material-icons';
import ShoppingCartIcon from './ShoppingCart';



export default function HamburgerNav() {
  return (
    <div>
      <section class="p-menu1">
    <nav id="navbar" class="navigation" role="navigation">
      <input id="toggle1" type="checkbox" />
      <label class="hamburger1" for="toggle1">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
    
      <nav class="menu1">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/candy">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <Link to="/cart"><ShoppingCartIcon /></Link>
            </ul>
      </nav>
  </nav>
  </section></div>
  )
}
