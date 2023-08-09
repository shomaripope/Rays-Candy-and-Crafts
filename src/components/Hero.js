import React from 'react'
import heroImage from '../images/candy800px.png';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div>
        <div className="hero">
    <div className="welcome">
    <h2>Welcome to Ray's Candy and Crafts!</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <Link to="/candy" style={{fontSize: "2rem" }}><button className="shop-now-button">Shop Now</button></Link>
    </div>
    <div className="heroimage">
      <img src={heroImage} alt="candy" />
    </div>
  </div>
    </div>
  )
}
