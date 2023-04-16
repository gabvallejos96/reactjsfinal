import { useState } from "react";
import { Link } from "react-router-dom";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { Button } from "react-bootstrap";

const SendOrder = () => {
  const [orderId, serOrderId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState([]);
  const [message, setMessage] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); 

  const db = getFirestore();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!nombre || !email) {
      setErrorMessage("Por favor complete los campos Nombre e E-mail");
      return;
    }

    setErrorMessage("Formulario enviado");

    addDoc(ordersCollection, order).then(({ id }) => serOrderId(id));
  };

  const order = {
    name,
    email,
    tel,
    message,
  };

  const ordersCollection = collection(db, "SendOrder");

  return (
    <>    
      <div className="formcont">
        <h2 className="contactanos"> Contáctanos</h2>

        <div className="container-two-parts">
          <div className="contactoform">
            <form onSubmit={handleSubmit}>              
              <p className="gapcito">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  onChange={(e) => setName(e.target.value)}
                />
              </p>
              <p className="gapcito">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </p>
              <p className="gapcito">
                <label htmlFor="tel">Teléfono</label>
                <input
                  type="tel"
                  name="Teléfono"
                  id="tel"
                  onChange={(e) => setTel(e.target.value)}
                />
              </p>
              
              <p className="btn-message">
                <Button type="submit">Enviar</Button>
              </p>
              <h3>{errorMessage}</h3>
            </form>
          </div>
          <div className="container-info">

            <h3>Id de la petición: {orderId}</h3>
          </div>
        </div>        
      </div>
    </>
  );
};

export default SendOrder;