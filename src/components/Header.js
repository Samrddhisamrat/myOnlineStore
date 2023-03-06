import React, { useState } from 'react'
import { FaShopify } from "react-icons/fa";

export default function Header() {
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
           <div className='shop-bag'></div>
           )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
