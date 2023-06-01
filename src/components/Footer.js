import React from 'react'
import raysLogo from '../images/rayslogo250px.png';
import { Link } from 'react-router-dom';

export default function 
() {
  return (
    <div>
        <footer>
            <div className="logo">
              <Link to="/">
              <img src={raysLogo} alt="Ray's Logo" />
              </Link>
            </div>
            <ul>
              <li><Link to="/candy">Candy</Link></li>
              <li><Link to="/crafts">Crafts</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
    </footer>
    </div>
  )
}
