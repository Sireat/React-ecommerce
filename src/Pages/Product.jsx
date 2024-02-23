import React, { useContext } from "react";

import BreadCrum from "../Components/BreadeCrum/BreadCrum";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import { ShopContext } from "../Context/ShopContext/ShopContext";
import { useParams } from "react-router-dom";

const Product = () => {
 
  const { productId } = useParams();

  return (
    <div>
      <BreadCrum product={Product} />
      <ProductDisplay product={Product}/>
      <DescriptionBox/>
    </div>
  );
};

export default Product;
