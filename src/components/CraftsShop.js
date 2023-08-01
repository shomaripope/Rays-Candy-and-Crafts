import { React, useEffect, useState } from 'react';
import Craft from './Craft';



export default function CraftsShop() {
    const [craft, setCraft] = useState([])

    useEffect(() => {
        fetchCraft();
    }, []);

    const fetchCraft = () => {
        fetch('https://fakestoreapi.com/products/category/jewelery?limit=18')
            .then(res=>res.json())
            .then(data=>setCraft(data))
            .catch(err => console.log(err))
    }

  return (
    <div>
        <Craft craft={craft} />

    </div>
  )
}
