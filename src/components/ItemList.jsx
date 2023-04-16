import React from 'react'
import { Link } from 'react-router-dom';
import Item from './Item';

const ItemList = ({prod}) => {
  console.log(prod);
  return (
   
    <div className='productsContainer'>

    {prod?.map((prod=>{
      
       return(<Item id={prod.id}  title ={prod.titulo} image={prod.imagen} desc={prod.titulo} price={prod.precio}/>);
    }))}

   

    </div>
  )
}

export default ItemList