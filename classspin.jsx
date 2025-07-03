import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const ClassSpin = () => {
  const [schedule, setSchedule] = useState([]);

  const spin = async () => {
    const res = await axios.post(`${API_URL}/spin/classes`, {
      availability: ["Monday", "Wednesday", "Friday"],
      preferred_time: "Morning",
      difficulty: "Medium"
    });
    setSchedule(res.data.schedule);
  };

  return (
    <div>
      <button onClick={spin}>Spin for Classes</button>
      <ul>
        {schedule.map((c, i) => (
          <li key={i}>{c.day} - {c.time}: {c.class}</li>
        ))}
      </ul>
    </div>
  );
};

export default ClassSpin;
