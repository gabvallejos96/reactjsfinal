import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemCount from "./ItemCount";

const ItemDetailContainer = () => {
  const { id } = useParams();

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

  const itemDetail = product.filter((prod) => prod.id === parseInt(id));
  const prueba = product.filter((prod) => prod.id === parseInt(id));
  console.log(itemDetail);

  return (
    <>
      {itemDetail.map((prod) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.imagen} />
            <Card.Body>
              <Card.Title>{prod.titulo}</Card.Title>
              <Card.Text>${prod.precio}</Card.Text>
              <ItemCount
               id={prod.id}
               stock={20}
               precio={prod.precio}
               nombre={prod.titulo}
               img={prod.imagen}
              />
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
};

export default ItemDetailContainer;
