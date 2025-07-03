import React from "react";
import TopBar from "./components/TopBar";
import ClassSpin from "./components/ClassSpin";
import JobSpin from "./components/JobSpin";
import PrizeSpin from "./components/PrizeSpin";

const App = () => {
  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <TopBar />
      <h2>📚 Class Scheduling</h2>
      <ClassSpin />
      <h2>💼 Job Recommendations</h2>
      <JobSpin />
      <h2>🎁 Prize Spin</h2>
      <PrizeSpin />
    </div>
  );
};

export default App;
