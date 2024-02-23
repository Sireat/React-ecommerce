import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import LoginSignup from './Pages/LoginSignup';
import Navbar from './Components/Navbar/Navbar';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import ShopCategory from "./Pages/ShopCategory";
import id from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/all_product";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/mens' element={<ShopCategory banner={men_banner} category='men' />} />
        <Route path='/womens' element={<ShopCategory banner={women_banner} category='women' />} />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category='kid' />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product productId={id} category='id'/>} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
