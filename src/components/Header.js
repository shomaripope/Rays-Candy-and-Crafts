import React from 'react'
import raysLogo from '../images/rayslogo250px.png';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './ShoppingCart';
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
          <HamburgerNav />
        </ul>
    </div>
  )
}