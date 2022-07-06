import React from "react";
import Modal from "./Modal";




export default function Card({e}) {
    return (
       
       <div className="card">
       <div className="row">
        <div className="info_all">
        <img src={e.image} className="profile-picture" alt="logo" />
        <div className="info">
          <p className="name">{e.artist}</p>
          <p className="category">{e.title}</p>
        </div>
        </div>
        <div className="buttons">
            <a href={e.tiktoklink} className="tiktok-button">See it on TikTok</a>
            {/* <button class="details-button">Details</button> */}
            <Modal e={e}/>
        </div>
        </div>

      </div>
      
    )
}