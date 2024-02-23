import React, { createContext, useState } from "react";

import all_product from "../../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const addtoCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    console.log(cartItems);
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }
 //const getTotalCartAmount=()=>{
   // let totalAmount=0;
   // for(const item in cartItems){
   //   if(cartItems[item]>0){
   //     let itemInfo=all_product.find((Product)=>Product.id===Number(item))
   //     totalAmount+=itemInfo.new_price*cartItems[item];
   ///   }
     // return totalAmount;
   // }
  //}
  const getTotalCartItems=()=>{
    let totalItem=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
      totalItem+=cartItems[item];
    }
    }
    return totalItem;
  }
  // eslint-disable-next-line no-undef
  const contextValue = {getTotalCartItems,getTotalCartAmount, all_product, cartItems, addtoCart, removeFromCart };
  //return (
   // <ShopContext.Provider value={contextValue}>
     // {props.children}
   // </ShopContext.Provider>
 //);
};

export default ShopContextProvider;
