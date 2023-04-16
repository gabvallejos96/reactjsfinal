import React, { useContext, useState } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import { Link } from "react-router-dom";
import SendOrder from "./SendOrder";
import { Button } from "react-bootstrap";

const CartForm = () => {
  const [cart, setCart] = useContext(CartContext);

  const eliminarProducto = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //Función calcular producto cantidad x precio
  const calcularProducto = (item) => {
    return item.precio * item.cantidad;
  };

  //Función calcular el total de la suma de los artículos del carrito
  const calcularTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total = total + item.precio * item.cantidad;
    });
    return total;
  };

  return (
    <>
      <div className="prod-cat">
        {cart.map((item) => {
          return (
            <div key={item.id} >
              <section className="card">
                <div className="cover__card">
                  <img src={item.img} alt="cardForm" />
                </div>
                <h3>{item.nombre}</h3>
                <div >
                  <h4>${item.precio}</h4>
                  <h3>Cantidad: {item.cantidad}</h3>
                  <h3>
                    Total: ${calcularProducto(item)}
                  </h3>
                  <Button onClick={() => eliminarProducto(item.id)}>Eliminar</Button>
                </div>
              </section>
            </div>
          );
        })}
        ;
      </div>

      <h3 className="preciofinal">Total a pagar: ${calcularTotal()}</h3>
      <button className="btn-2">
        <Link to={"/cat"}><Button>Continuar</Button></Link>
      </button>

      {cart.length > 0 ? (
        <SendOrder />
      ) : (
        <>
          <div className="container-icon">
            <h3 className="carrito-vacio ">Tu carrito está vacío</h3>
            <button >
              <Link to={"/cat"}>Volver a la tienda</Link>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartForm;
