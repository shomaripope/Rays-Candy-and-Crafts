import React from 'react'
import SingleProduct from './SingleProduct'

export default function ContactForm() {
  return (
    <div>
        <form>
            <label>
                Name:
                <input type="text" value="" />
            </label>
            <label>
                Email:
                <input type="text" value="" />
            </label>
            <textarea>
            
            </textarea>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
