import React from "react"
import Card from "./Card"
import { useState, useEffect } from "react";
import axios from "axios";

export default function Cards({datas}){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

 useEffect(() => {

    const fetchData = async () =>{
        try {
            axios.get("http://127.0.0.1:8000/songs").then((response) => {
            setData(response.data);
            setLoading(false);
          });
        } catch (error) {
         console.log(error);   
        }
    }
        
    
    //  fetch(`http://127.0.0.1:8000/songs`)
    //      .then((response) => {
    //          if (!response.ok) {
    //              throw new Error(
    //                  `This is an HTTP error: The status is ${response.status}`
    //              );
    //          }
    //          return response.json();
    //      })
    //      .then((actualData) => {
    //          setData(actualData);
    //          setError(null);
    //      })
    //      .catch((err) => {
    //          setError(err.message);
    //          setData(null);
    //      })
    //      .finally(() => {
    //          setLoading(false);
    //      });
    fetchData();
  
    }, []);
 //console.log(JSON.stringify(data) + " S S ");


   if(loading){
    return <p></p>
   }
   
  return (
    <div style={{margin:'40px'}} >
 
     {data.map((d)=>{
       return (
       <Card e={d} />
     );})}
    </div>

  );
}