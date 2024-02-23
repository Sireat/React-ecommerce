import './Navbar.css';

import React, { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import { ShopContext } from '../../Context/ShopContext/ShopContext'
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu]=useState('shop')
  //const {getTotalCartItems}=useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={Logo} alt=''/>
        <p>SHOPPER</p>
      </div>
      <ul className='nave-menu'>
        <li onClick={()=>{setMenu('shop')}}><Link to='/'>Shop</Link>{menu==='shop'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('mens')}}><Link to='/mens'>Men</Link>{menu==='mens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('womens')}}><Link to='/womens'>Women</Link>{menu==='womens'?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu('kids')}}><Link to='/kids'>Kids</Link>{menu==='kids'?<hr/>:<></>}</li>
      </ul>
      <div className='nav-login-cart'>
       <Link to='/login'><button>Login</button></Link>
       <Link to='/cart'> <img src={cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
};

export default Navbar;
