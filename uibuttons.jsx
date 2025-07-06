import React from 'react';
import './UIButtons.css';

const UIButtons = ({ onSpin, onCalendar, onCamera, onSubmit, onDifficultyChange }) => {
  return (
    <div className="ui-buttons">
      {/* Difficulty Slider */}
      <div className="slider-container">
        <label>Class Difficulty</label>
        <input type="range" min="1" max="5" onChange={onDifficultyChange} />
      </div>

      {/* Bottom buttons */}
      <button className="spin-button" onClick={onSpin}>🎰 Spin</button>
      <button className="calendar-button" onClick={onCalendar}>📅 Calendar</button>
      <button className="camera-button" onClick={onCamera}>📸 Upload</button>

      {/* Submit button inside reel */}
      <div className="submit-wrapper">
        <button className="submit-button" onClick={onSubmit}>✅ Submit</button>
      </div>
    </div>
  );
};

export default UIButtons;
