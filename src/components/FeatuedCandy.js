import { React, useEffect, useState } from 'react';
import Candy from './Candy';


export default function FeatuedCandy() {
    const [candy, setCandy] = useState([])

    useEffect(() => {
        fetchCandy();
    }, []);

    const fetchCandy = () => {
        fetch('https://fakestoreapi.com/products?limit=3')
            .then(res=>res.json())
            .then(data=>setCandy(data))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <div className="featured-candy-banner"> 
            <h2>Featured Candy</h2>
        </div>
        <Candy candy={candy} />
    </div>
  )
}
