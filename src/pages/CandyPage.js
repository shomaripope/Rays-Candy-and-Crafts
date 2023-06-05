import React from 'react';
import Header from '../components/Header';
import CandyShop from '../components/CandyShop';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


export default function CandyPage() {
  return (
    <div>
      <Header />
      <div className='product-selector'>
      <Link to="/candy"><h3 className="candy-selector" style={{ textShadow: '1px 1px 0px #FF3EC9' }}>Candy</h3></Link>

      <Link to="/crafts"><h3 className='crafts-selector'>Crafts</h3></Link>
      </div>

      <CandyShop />
      <CandyShop />
      <CandyShop />
      <CandyShop />
      <CandyShop />
      <Footer/>
    </div>
  )
}
