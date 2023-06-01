import React from 'react'
import craftProduct from '../images/meg-wagener-vuXTB1lR3AY-unsplash150px.png';
import { Link } from 'react-router-dom';

export default function 
() {
  return (
    <div>

        <div className="featured-crafts-banner"> 
            <h2>Featured crafts</h2>
        </div>

        <div className='featured-crafts'>

        <div className="crafts">
                <div className="craft-img">
                <img src={craftProduct} />
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
                <img src={craftProduct} />
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
                <img src={craftProduct} />
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
                <img src={craftProduct} />
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
