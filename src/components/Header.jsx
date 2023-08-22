import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const Header = ({ orders, onDelete }) => {
   const [cartOpen, setCartOpen] = useState(false)

   const showOders = () => {
      let summa = 0
      orders.forEach(el => summa += Number.parseFloat(el.price))
      return (<div>
         {orders.map(el => (
            <Order key={el.id} item={el} onDelete={onDelete} />
         ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
      </div>)
   }

   const showNothing = () => {
      return (<div className='empty'>
         <h2>Товаров нет</h2>
      </div>)
   }
   return (
      <header>
         <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
               <li>Про нас</li>
               <li>Контакты</li>
               <li>Кабинет</li>
            </ul>
            <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
            {cartOpen && (
               <div className='shop-cart'>
                  {orders.length > 0 ?
                     showOders() : showNothing()}
               </div>
            )}
         </div>
         <div className='presentation'></div>
      </header>
   )
}

export default Header
