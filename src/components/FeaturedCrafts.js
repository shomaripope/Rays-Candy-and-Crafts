import { React, useEffect, useState } from 'react';
import Craft from './Craft';


export default function CraftsShop() {
    const [craft, setCraft] = useState([])

    useEffect(() => {
        fetchCraft();
    }, []);

    const fetchCraft = () => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(data=>setCraft(data))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <div className="featured-crafts-banner"> 
            <h2>Featured Crafts</h2>
        </div>
        <Craft craft={craft} />

    </div>
  )
}
