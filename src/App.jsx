import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Item from "./components/Item";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";
import CartForm from "./components/CartForm";
import SendOrder from "./components/SendOrder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/cat" element={<ItemListContainer />} />
          <Route exact path="/cat/:category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path='/cart' element={<CartForm/>} />
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
