import './RelatedProducts.css'

import React from 'react'
import data_product from '../Assets/data'

const RelatedProduct = () => {
  return (
    <div className='rlatedproduct'>
      <h1>Delated products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
            return  <item
            key={item.id}  // Use 'item.id' as the key
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
