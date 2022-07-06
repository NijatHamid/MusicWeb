import axios from "axios";
import React from "react"
import Navbar from "./component/Navbar"
import Main from "./component/Main"
// import Modal from "./component/Modal"
import Card from "./component/Card"
import './index.css'
import { useState, useEffect } from "react";
import Cards from "./component/Cards"



export default function App() {
 const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
}, []); 
//console.log(data);
  

  return (
      <div>
        <Navbar />
        <Main />
        {/* <Card /> */}
        <Cards  />
        
      </div>
        
    )
}