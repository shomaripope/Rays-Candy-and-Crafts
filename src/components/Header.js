import React from 'react'
import raysLogo from '../images/rayslogo250px.png';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCartIcon';
import HamburgerNav from './HamburgerNav';


export default function Header() {
  return (
    <div className='header'>
      <div >
          <Link to="/">
            <img className="logo" src={raysLogo} alt="Ray's Logo" />
          </Link>
        </div>
        <ul>
          {/* <li><Link to="/candy">Candy</Link></li>
          <li><Link to="/crafts">Crafts</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li> */}
          {/* <ShoppingCartIcon /> */}
          <HamburgerNav />
        </ul>
    </div>
  )
}