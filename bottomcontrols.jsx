import React from "react";

const BottomControls = ({
  onSpin,
  onCalendarClick,
  onCameraClick,
  onSubmitClass,
  onSubmitJob,
  difficulty,
  setDifficulty
}) => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      position: "fixed",
      bottom: 20,
      left: 0,
      right: 0,
      padding: 10
    }}>
      
      {/* 🎚️ Difficulty Slider */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <label>🎚️ Class Difficulty: {difficulty}</label>
        <input
          type="range"
          min="0"
          max="2"
          value={["Easy", "Medium", "Hard"].indexOf(difficulty)}
          onChange={(e) => {
            const levels = ["Easy", "Medium", "Hard"];
            setDifficulty(levels[e.target.value]);
          }}
        />
      </div>

      {/* 🎰 Spin Button */}
      <button onClick={onSpin} style={{ padding: "10px 20px", fontSize: "16px" }}>
        🎰 Spin
      </button>

      {/* Submit Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={onSubmitClass}>📚 Submit Classes</button>
        <button onClick={onSubmitJob}>💼 Submit Jobs</button>
      </div>

      {/* Bottom Left & Right Buttons */}
      <div style={{
        position: "fixed",
        bottom: 10,
        left: 10,
        right: 10,
        display: "flex",
        justifyContent: "space-between"
      }}>
        <button onClick={onCalendarClick}>📅 Calendar</button>
        <button onClick={onCameraClick}>📷 Upload</button>
      </div>
    </div>
  );
};

export default BottomControls;
