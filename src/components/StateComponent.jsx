import { useState } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const StateComponent = ({children}) => {

    return (
        <CartContext.Provider>
            {children}
        </CartContext.Provider>
    )

}