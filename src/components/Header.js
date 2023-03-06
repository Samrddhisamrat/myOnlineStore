import React, { useState } from 'react'
import { FaShopify } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
   let sum = 0;
   props.orders.forEach(el => sum += Number.parseFloat(el.price))
   return (<div>
            {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
      <p className='sum'>Amount: {new Intl.NumberFormat().format(sum)}$</p>
   </div>)
}

const showNothing = () => {
   return (<div className='empty'>
      <h2>Not items</h2>
   </div>)
}

export default function Header(props) {
   let [bagOpen, setBagOpen] = useState(false)

  return (
     <header>
        <div>
           <span className='logo'>House staff</span>
           <ul className='nav'>
              <li>About Us</li>
              <li>Contacts</li>
              <li>Office</li>
           </ul>
           <FaShopify onClick={() => setBagOpen(bagOpen = !bagOpen)} className={`shop-bag-button ${bagOpen && 'active'}`} />
           
           {bagOpen && (
              <div className='shop-bag'>
                 {props.orders.length > 0 ? showOrders(props) : showNothing()}
           </div>
           )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
