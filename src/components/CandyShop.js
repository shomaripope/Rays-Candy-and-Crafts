import React from 'react';
import candyProduct from '../images/sarah-takforyan-qRaNRi69t14-unsplash175px.png';
import { Link } from 'react-router-dom';

export default function CandyShop() {
  return (
    <div className='candy-shop'>
        <div className="candy">
                <div className="candy-img">
                <img src={candyProduct} alt="Ray's Logo" />
                </div>
                    <h2 className="product-title">Freeze Dried Skittles
                    </h2>
                    <p>Our delicious homemade sweets are perfect for snacking anytime.
                    </p>
                    <span>$9.99</span>
                    <Link to="/candy"><button className="btn">Add to Cart</button></Link>
            </div>
            

            <div className="candy">
                <div className="candy-img">
                <img src={candyProduct} alt="Ray's Logo" />
                </div>
                    <h2 className="product-title">Freeze Dried Skittles
                    </h2>
                    <p>Our delicious homemade sweets are perfect for snacking anytime.
                    </p>
                    <span>$9.99</span>
                    <Link to="/candy"><button className="btn">Add to Cart</button></Link>
            </div>

            <div className="candy">
                <div className="candy-img">
                <img src={candyProduct} alt="Ray's Logo" />
                </div>
                    <h2 className="product-title">Freeze Dried Skittles
                    </h2>
                    <p>Our delicious homemade sweets are perfect for snacking anytime.
                    </p>
                    <span>$9.99</span>
                    <Link to="/candy"><button className="btn">Add to Cart</button></Link>
            </div>


    </div>
  )
}
