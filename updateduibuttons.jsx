// src/components/UIButtons.jsx
import React from 'react';
import './UIButtons.css';

const UIButtons = ({ onSpin, onCalendar, onCamera, onSubmit, onDifficultyChange, onAccount, onProgress }) => {
  return (
    <div className="ui-buttons">

      {/* Top Buttons */}
      <button className="account-button" onClick={onAccount}>👤</button>
      <button className="progress-button" onClick={onProgress}>📊</button>

      {/* Difficulty Slider */}
      <div className="slider-container">
        <label>Class Difficulty</label>
        <input type="range" min="1" max="5" onChange={onDifficultyChange} />
      </div>

      {/* Bottom Buttons */}
      <button className="spin-button" onClick={onSpin}>🎰 Spin</button>
      <button className="calendar-button" onClick={onCalendar}>📅 Calendar</button>
      <button className="camera-button" onClick={onCamera}>📸 Upload</button>

      {/* Submit inside reel */}
      <div className="submit-wrapper">
        <button className="submit-button" onClick={onSubmit}>✅ Submit</button>
      </div>
    </div>
  );
};

export default UIButtons;
