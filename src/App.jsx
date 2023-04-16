import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route exact path="/home" element ={<Home/>}/>
        <Route exact path="/cat" element={<ItemListContainer/>}/> 
        <Route exact path="/cat/:category" element={<ItemListContainer/>}/> 
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>


    </BrowserRouter>
  )
}

export default App
