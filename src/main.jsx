import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgseF4bLHnzG4iAKC_SIvigEoYzBvK9hU",
  authDomain: "gabvallejos96-2c480.firebaseapp.com",
  projectId: "gabvallejos96-2c480",
  storageBucket: "gabvallejos96-2c480.appspot.com",
  messagingSenderId: "433601001516",
  appId: "1:433601001516:web:91e454db1e761662b3f989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
 
    <App />
   
    
  </React.StrictMode>,
)
