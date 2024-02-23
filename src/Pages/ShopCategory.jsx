import './CSS/ShopCategory.css';

import Item from '../Components/Item/Item';
import React/*, { useContext } */ from 'react';
//import { ShopContext } from '../Context/ShopContext/ShopContext';
import all_product from '../Components/Assets/all_product';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';

const ShopCategory = (props) => {
  // const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-panel' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>1-12</span>out of 36
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => (
          // Wrap the following block in parentheses
          (props.category === item.category) ? (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ) : null
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
