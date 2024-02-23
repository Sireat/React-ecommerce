import './NewCollections.css'

import Item from '../Item/Item';
import React from 'react'
import new_collection from '../Assets/new_collections'

const NewCollections = () => {
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collection">
        {new_collection.map((item,i)=>{
            return  <Item
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

export default NewCollections
