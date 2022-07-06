import React, { useState } from "react";
import {Closebutton} from '../modules/Icon.js'




export default function Modal({e}) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <button onClick={toggleModal} class="details-button">Details</button>
    {modal && (
      <div className="modal">    
        <div onClick={toggleModal} className="overlay"></div>
        <div className="modal-content">
          <button className="close-modal" onClick={toggleModal} >
              <Closebutton />
          </button>
          <h2 className="details">Details: {e.artist}</h2>
          <p className="feature">TikTok Videos: {e.number_of_videos}</p>
          <p className="feature">Artist: {e.artist}</p>
          <p className="feature">Album: {e.Album}</p>
        </div>
      </div>
    )}
    </>
  );
}