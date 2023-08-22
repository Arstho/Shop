import Header from "./components/Header";
import Footer from "./components/Footer";

import React, { useState } from 'react'
import Items from "./components/Items";
import { logDOM } from "@testing-library/react";

const App = () => {
   const [orders, setOrders] = useState([])
   const [items, setItems] = useState([
      {
         id: 1,
         title: "Стул",
         img: 'chair.jpg',
         desc: 'Lorem ipsum, dolor sit amet consectetur',
         catecory: 'chairs',
         price: '49.99'
      },
      {
         id: 2,
         title: "Стол",
         img: 'table.avif',
         desc: 'Lorem ipsum, dolor sit amet consectetur',
         catecory: 'tables',
         price: '149.99'
      },
      {
         id: 3,
         title: "Кровать",
         img: 'bed.avif',
         desc: 'Lorem ipsum, dolor sit amet consectetur',
         catecory: 'bed',
         price: '155.99'
      },
      {
         id: 4,
         title: "Диван",
         img: 'sofa.jpg',
         desc: 'Lorem ipsum, dolor sit amet consectetur',
         catecory: 'sofa',
         price: '149.99'
      },
      {
         id: 5,
         title: "Кресло",
         img: 'armchair.jpg',
         desc: 'Lorem ipsum, dolor sit amet consectetur',
         catecory: 'armchairs',
         price: '89.99'
      },
      {
         id: 6,
         title: "Лампа",
         img: 'ligth.avif',
         desc: 'Lorem ipsum, dolor sit amet consectetur',
         catecory: 'ligth',
         price: '25.99'
      },
   ])

   const deleteOrder = (id) => {
      setOrders(orders.filter(el => el.id !== id))
   }

   const addToOrder = (item) => {
      let isInArr = false
      orders.forEach(el => {
         if (el.id === item.id) {
            isInArr = true
         }
      })
      if (!isInArr) {
         setOrders([...orders, item])
      }
   }

   return (
      <div className="wrapper">
         <Header orders={orders} onDelete={deleteOrder} />
         <Items items={items} onAdd={addToOrder} />
         <Footer />
      </div>
   )
}

export default App

