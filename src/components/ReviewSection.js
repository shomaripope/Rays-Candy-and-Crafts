import React from 'react'
import reviewPic from '../images/alex-starnes-WYE2UhXsU1Y-unsplash Small200px.png';
import { Link } from 'react-router-dom';

export default function ReviewSection() {
  return (
    <div>


        <div class="reviews-banner"> 
        <h2>Customer Reviews</h2>
        </div>

        <div className='reviews'>

            <div class="review">
            <div class="profile-img">
                <img src={reviewPic} alt="review image 1" />
            </div>
            <h2 class="name">Amy Stevenson</h2>
            <p class="description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, esse?</p>
            <Link to="/candy"><button className="btn">Shop Now</button></Link>
            </div>

            <div class="review">
            <div class="profile-img">
            <img src={reviewPic} alt="review image 2" />
            </div>
            <h2 class="name">Amy Stevenson</h2>
            <p class="description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, esse?</p>
            <Link to="/candy"><button className="btn">Shop Now</button></Link>
            </div>

            <div class="review">
            <div class="profile-img">
                <img src={reviewPic} alt="review image 3" />
            </div>
            <h2 class="name">Amy Stevenson</h2>
            <p class="description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, esse?</p>
            <Link to="/candy"><button className="btn">Shop Now</button></Link>
            </div>

            <div class="review">
            <div class="profile-img">
                <img src={reviewPic} alt="review image 4" />
            </div>
            <h2 class="name">Amy Stevenson</h2>
            <p class="description"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, esse?</p>
            <Link to="/candy"><button className="btn">Shop Now</button></Link>
            </div>
        
        </div>
        

    </div>
  )
}
