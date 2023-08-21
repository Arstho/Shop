import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import Order from './Order'

const Header = ({ orders }) => {
   const [cartOpen, setCartOpen] = useState(false)

   const showOders = () => {
      return (<div>{orders.map(el => (
         <Order key={el.id} item={el} />
      ))}</div>)
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
