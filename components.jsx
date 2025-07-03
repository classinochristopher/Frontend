import React from "react";

const TopBar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
      <button>👤 Account</button>
      <button>📅 Progress</button>
    </div>
  );
};

export default TopBar;
