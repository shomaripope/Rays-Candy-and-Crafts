import React from 'react'

export default function ContactForm() {
  return (
    <div className='contactPage'>
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
