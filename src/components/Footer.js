import React from 'react'
import raysLogo from '../images/rayslogo250px.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
        <footer>
            <div className="logo">
              <Link to="/">
              <img src={raysLogo} alt="Ray's Logo" />
              </Link>
            </div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/candy">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
    </footer>
    </div>
  )
}
