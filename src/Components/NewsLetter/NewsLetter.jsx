import './NewsLetter.css'

import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
      <p>Sabscribe to Owr News Letter and Stay Updated</p>
      <div>
        <input type='email' placeholder='Your email'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
