import React from 'react'

const CartWidget = () => {

    const carrito = 5;

  return (
    <div className='cartwidget'>
        <img className='cartLogo' src="https://cdn-icons-png.flaticon.com/512/5465/5465858.png" alt="carrito" />
        <p className='numberOfCart'>{carrito}</p>
    </div>
  )
}

export default CartWidget