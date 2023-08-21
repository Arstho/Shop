import React from 'react'

const Order = ({ item }) => {
   return (
      <div className='item'>
         <img src={'./img/' + item.img} alt="img" />
         <h2>{item.title}</h2>
         <p>{item.desc}</p>
         <b>{item.price}$</b>s
      </div>
   )
}

export default Order
