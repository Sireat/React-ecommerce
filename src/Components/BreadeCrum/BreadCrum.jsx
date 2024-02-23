import './BreadCrum.css'

import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import product from '../../Pages/Product'

const BreadCrum = () => {
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />SHOP <img src={arrow_icon} alt="" />{product.Category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum
