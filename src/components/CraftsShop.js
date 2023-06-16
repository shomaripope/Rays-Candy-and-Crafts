import { React, useEffect, useState } from 'react';
import Craft from './Craft';
import craftProduct from '../images/meg-wagener-vuXTB1lR3AY-unsplash150px.png';
import { Link } from 'react-router-dom';


export default function CraftsShop() {
    const [craft, setCraft] = useState([])

    useEffect(() => {
        fetchCraft();
    }, []);

    const fetchCraft = () => {
        fetch('https://fakestoreapi.com/products')
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
