import React from 'react'
import Header from '../components/Header';
import CraftsShop from '../components/CraftsShop';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function CraftsPage() {
  return (
    <div>
      <Header />
      <div className='product-selector'>
      <Link to="/candy"><h3 className="candy-selector">Candy</h3></Link>

      <Link to="/crafts"><h3 className='crafts-selector'style={{ textShadow: '1px 1px 0px #FF3EC9' }}>Crafts</h3></Link>
      </div>
      
      <CraftsShop />
      <CraftsShop />
      <CraftsShop />
      <CraftsShop />
      <CraftsShop />
      <Footer/>
    </div>
  )
}