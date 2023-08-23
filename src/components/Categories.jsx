import React, { useState } from 'react'

const Categories = ({ chooseCategory }) => {
   const [category, setCategory] = useState([
      {
         key: 'all',
         name: 'Все'
      },
      {
         key: 'chairs',
         name: 'Стулья'
      },
      {
         key: 'tables',
         name: 'Столы'
      },
      {
         key: 'bed',
         name: 'Кровати'
      },
      {
         key: 'sofa',
         name: 'Диваны'
      },
      {
         key: 'armchairs',
         name: 'Кресла'
      },
      {
         key: 'ligth',
         name: 'Свет'
      }
   ])
   return (
      <div className='categories'>
         {category.map(el => (
            <div key={el.key} onClick={() => chooseCategory(el.key)}>{el.name}</div>
         ))}
      </div>
   )
}

export default Categories
