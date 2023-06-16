import { React, useEffect, useState } from 'react';
import Candy from './Candy';
// import candyProduct from '../images/sarah-takforyan-qRaNRi69t14-unsplash175px.png';
import { Link } from 'react-router-dom';


export default function CandyShop() {
    const [candy, setCandy] = useState([])

    useEffect(() => {
        fetchCandy();
    }, []);

    const fetchCandy = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setCandy(data))
            .catch(err => console.log(err))
    }

  return (
    <div className='candy-shop'>
        <Candy candy={candy} />

    </div>
  )
}
