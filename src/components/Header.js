import React from 'react'

export default function Header() {
  return (
    <div className='header'>
      <div class="logo">
          <a href="#">
            <img src="src/rayslogo.png" alt="Ray's Logo" />
          </a>
        </div>
        <ul>
          <li><a href="#">Candy</a></li>
          <li><a href="#">Crafts</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}