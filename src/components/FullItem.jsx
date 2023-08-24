import React from 'react'

const FullItem = ({ item, onShowItem, onAdd }) => {

   return (
      <div className='full-item'>
         <div>
            <img src={'./img/' + item.img} alt="img" onClick={() => onShowItem(item)} />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <b>{item.price}$</b>
            <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
         </div>
      </div>
   )
}

export default FullItem
