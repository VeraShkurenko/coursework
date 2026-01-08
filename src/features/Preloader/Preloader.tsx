import React from 'react';
import './ui/Preloader.css';

export default function Preloader() {
  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        <h1 className="preloader-logo text-uppercase fw-bold">Makeup</h1>
        <div className="preloader-bar-container">
          <div className="preloader-bar"></div>
        </div>
      </div>
    </div>
  );
}