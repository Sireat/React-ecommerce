// CartItems.js

import "./CartItems.css";

import React, { useContext } from "react";

import { ShopContext } from '../../Context/ShopContext/ShopContext'
import all_product from '../Assets/all_product';
import remove_icon from "../Assets/cart_cross_icon.png";

const CartItems = () => {
  //const {getTotalCartAmount, all_product, CartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (CartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format">
                <img
                  src={e.image}
                  alt=""
                  className="cartitem-producticon"
                />
                <p>{e.name}</p>
                <p>{e.new_price}</p>
                <button className="item-quantity">{CartItems[e.id]}</button>
                <p>{e.new_price * CartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    // eslint-disable-next-line no-undef
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-totalitem">
              <p>Subtotal</p>
              <p>&{/*getTotalCartAmount*/}</p>
            </div>
            <hr />
            <div className="cartitems-totalitem">
              <p>Shipping Fee</p>
              <p>Free Delivery</p>
            </div>
            <hr />
            <div className="cartitems-totalitem">
              <h3>Total</h3>
              <h3>&{/*getTotalCartAmount*/}</h3>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
