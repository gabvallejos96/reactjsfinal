import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
  const {category} = useParams();
  

 
 

  const [product, setProduct] = useState([]);


  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "shopstore");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => doc.data());
      console.log(docs);
      setProduct(docs);
    });
  }, []);

  
  const catFilter = product.filter((prod) => prod.categoria === category);



  return (
    <>
    
    <div>
     {category? <ItemList prod={catFilter}/> : <ItemList prod={product}/>}
    </div>

    
    
    </>
  )
}

export default ItemListContainer