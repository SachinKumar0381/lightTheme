import React, { useContext } from 'react'
import { CountContext } from '../contexts/CountContext'

const Wishlist = () => {
    const{count}=useContext(CountContext);
  return (
    <div>{`Theme : ${count?"Light" : "Dark"}`}</div>
  )
}

export default Wishlist