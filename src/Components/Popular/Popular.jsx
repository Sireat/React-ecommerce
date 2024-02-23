import './Popular.css';

import Item from '../Item/Item';
import React from 'react';
import data_product from '../Assets/data';

// Make sure to import the 'Item' component


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item) => (
          <Item
            key={item.id}  // Use 'item.id' as the key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
