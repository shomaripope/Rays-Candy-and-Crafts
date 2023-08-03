import { React, useEffect, useState } from 'react';
import Candy from './Candy';



export default function CandyShop() {
    const [candy, setCandy] = useState([]);
    

    useEffect(() => {
        fetchCandy();
    }, []);

    const fetchCandy = () => {
        fetch('https://fakestoreapi.com/products/category/electronics?limit=18')
            .then(res=>res.json())
            .then(data=>setCandy(data))
            .catch(err => console.log(err))
    }

  return (
    <div>
        
        <Candy candy={candy} />
      
    </div>
  )
}
