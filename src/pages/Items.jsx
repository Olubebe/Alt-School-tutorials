import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Items(){
  return (
    <div>
        <h1>Items</h1>
        <ul>
            {['fruits', 'books', 'cars', 'furnitures']
            .map((item) => (
               <li>
                     <Link to={`/items/${item}`}>{item}</Link>
               </li> 
               ))}
        </ul>
        <Outlet />
    </div>
  )
}
