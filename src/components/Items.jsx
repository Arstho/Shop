import React from 'react'
import Item from './Item'

const Items = ({items}) => {
  return (
    <main>
      {items.map(el => (
         <Item key={el.id} item={el}/>
      ))}
    </main>
  )
}

export default Items
