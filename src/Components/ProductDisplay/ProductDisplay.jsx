import './ProductDisplay.css'

import CartItems from '../CartItems/CartItems'
import React from 'react'
import { ShopContext } from '../../Context/ShopContext/ShopContext'
import all_product from '../Assets/all_product';
import star_dull_icon from '../Assets/star_dull_icon.png'
import star_icon from '../Assets/star_icon.png'
import { useContext } from 'react'

const ProductDisplay = (props) => {
    const {product}=props;
    //const addtoCart=useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
        <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>10000</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-oldprices">${product.old_price}</div>
            <div className="productdisplay-right-newprices">${product.new_price}</div>
        </div>
        <div className="productright-discription">
            This is a discription about the things to buy
        </div>
        <div className="displayproduct-right-siz">
            <h1>Select Size</h1>
            <div className="displayproduct-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{CartItems(product.id)}}>Add to Cart</button>
        <p className="productdisplay-right-category"><span>Category :</span>Women T-shirt crop top</p>
        <p className="productdisplay-right-category"><span>Tags :</span>Modern tag</p>
      </div>
    </div>
  )
}

export default ProductDisplay
