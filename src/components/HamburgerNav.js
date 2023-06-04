import React from 'react'
import { Link } from 'react-router-dom';
import 'material-icons';
import ShoppingCartIcon from './ShoppingCartIcon';

export default function HamburgerNav() {
  return (
    <div><section class="p-menu1">
    <nav id="navbar" class="navigation" role="navigation">
      <input id="toggle1" type="checkbox" />
      <label class="hamburger1" for="toggle1">
        <div class="top"></div>
        <div class="meat"></div>
        <div class="bottom"></div>
      </label>
    
      <nav class="menu1">
        <ul>
          <li><Link to="/candy" className="link1">Candy</Link></li>
          <li><Link to="/crafts" className="link1">Crafts</Link></li>
          <li><Link to="/about" className="link1">About Us</Link></li>
          <li><Link to="/contact" className="link1">Contact</Link></li>
          <ShoppingCartIcon />
        </ul>
      </nav>
  </nav>
  </section></div>
  )
}
