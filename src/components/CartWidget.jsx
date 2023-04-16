import React from 'react'
import { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const [cart, setCart] = useContext(CartContext);

  //Función que cuenta lo que hay en el carrito
  const contador = cart.reduce((acc, curr) => {
    return acc + curr.cantidad;
  }, 0);

  return (
    <div className='cartwidget'>
      <Link to={"/cart"} className='dflexon'>
      <img className='cartLogo' src="https://cdn-icons-png.flaticon.com/512/5465/5465858.png" alt="carrito" />
        <p className='numberOfCart'>{contador}</p>
      </Link>
        
    </div>
  )
}

export default CartWidget