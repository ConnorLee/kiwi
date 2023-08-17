import logo from "./assets/logo.png";
import kiwi from "./assets/kiwi.png"
import kivo from "./assets/kivo.png"
import './App.css';
import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

export default function App() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const toggleOverlay = () => {
    setOverlayOpen(!overlayOpen);
  };

  const twitter = () => {
    window.open('https://twitter.com/kwigrp', '_blank');
  };

  return (
    <div className="container">

      {!overlayOpen && (
        <div className="button-group">
          <button className="circle-button" onClick={toggleOverlay}>🥝</button>
          <button className="circle-button" onClick={twitter}>
            <img src={logo} alt="Button Text" />
          </button>

        </div>
      )}

      <div style={{ width: '100%', height: '100vh' }}>
        <Spline scene="https://prod.spline.design/QkTw2wgxGEGOH7BZ/scene.splinecode" />
      </div>

      <div className={`overlay ${overlayOpen ? '' : 'hide'}`}>
        <div className="button-group">
          <button className="circle-button" onClick={toggleOverlay}>X</button>
        </div>

        <img className="kiwi-img" src={kiwi} alt="Kiwi" />

        <div className="overlay-content">
          <p className="overlay-text">Kiwi Group is a product studio building</p>
          <p className="overlay-text">socially-driven crypto apps.</p>
        </div>

        <div className="bottom-element">
          <img className="bottom-left-img" src={kivo} alt="Kivo" />
          <div className="bottom-right-wrapper">
            <div className="bottom-right-text">contact@kwigrp.com</div>
          </div>
      </div>

      </div>
    </div>
  );
}

// .bottom-element {
//   position: absolute;
//   bottom: 10%; /* Padding from the bottom */
//   width: 100%;
//   display: flex; /* Add flexbox */
//   justify-content: space-between; /* Distribute content horizontally */
//   padding-left: 30px; /* Add padding to left */
//   padding-right: 30px; /* Add padding to right */
//   object-fit: contain;
// }

// .bottom-left-img {
//   width: 100px;
//   height: 100px;
//   object-fit: contain;
// }

// .bottom-right-text {
//   color: white;
//   font-family: 'Avenir', sans-serif;
//   font-size: 16px; /* Adjust as needed */
// }