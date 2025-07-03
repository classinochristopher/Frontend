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
import React, { useState } from "react";
import BottomControls from "./components/BottomControls";
import TopBar from "./components/TopBar";
import ClassSpin from "./components/ClassSpin";
import JobSpin from "./components/JobSpin";
import PrizeSpin from "./components/PrizeSpin";

const App = () => {
  const [difficulty, setDifficulty] = useState("Medium");

  const handleSpin = () => {
    // optional: trigger a universal spin (or separate ones per tab)
    console.log("Spin triggered");
  };

  return (
    <div>
      <TopBar />
      <h2>📚 Class Scheduling</h2>
      <ClassSpin difficulty={difficulty} />
      <h2>💼 Job Recommendations</h2>
      <JobSpin />
      <h2>🎁 Prize Spin</h2>
      <PrizeSpin />

      <BottomControls
        onSpin={handleSpin}
        onCalendarClick={() => alert("Open calendar UI")}
        onCameraClick={() => alert("Open upload input")}
        onSubmitClass={() => alert("Submit class schedule")}
        onSubmitJob={() => alert("Submit job choices")}
        difficulty={difficulty}
        setDifficulty={setDifficulty}
      />
    </div>
  );
};

export default App;
