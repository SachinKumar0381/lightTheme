import React, { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const Cart = () => {
  const {count,setCount}=useContext(CountContext);
  const increment=()=>{
    if(count==true)
    setCount(false);
    else setCount(true);
  }
  return (
    <div>Cart
        <button onClick={increment}>Change Theme</button>
    </div>
  )
}

export default Cart