import React from 'react';
import craftProduct from '../images/meg-wagener-vuXTB1lR3AY-unsplash150px.png';
import { Link } from 'react-router-dom';


export default function CraftsShop() {
  return (
    <div>
        <div className='crafts-shop'>

<div className="crafts">
        <div className="craft-img">
        <img src={craftProduct} alt="craft image 1" />
        </div>
            <h2 className="product-title">Oil Painting
            </h2>
            <p>Our homemeade crafts are perfect gift idea for any holiday or special occasion anytime.
            </p>
            <span>$9.99</span>
            <Link to="/crafts"><button className="btn">Add to Cart</button></Link>
    </div>
    

    <div className="crafts">
        <div className="craft-img">
        <img src={craftProduct} alt="craft image 2" />
        </div>
            <h2 className="product-title">Oil Painting
            </h2>
            <p>Our homemeade crafts are perfect gift idea for any holiday or special occasion anytime.
            </p>
            <span>$9.99</span>
            <Link to="/crafts"><button className="btn">Add to Cart</button></Link>
    </div>

    <div className="crafts">
        <div className="craft-img">
        <img src={craftProduct} alt="craft image 3" />
        </div>
            <h2 className="product-title">Oil Painting
            </h2>
            <p>Our homemeade crafts are perfect gift idea for any holiday or special occasion anytime.
            </p>
            <span>$9.99</span>
            <Link to="/crafts"><button className="btn">Add to Cart</button></Link>
    </div>

</div>
    </div>
  )
}
