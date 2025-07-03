import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const JobSpin = () => {
  const [jobs, setJobs] = useState([]);
  const [wild, setWild] = useState("");

  const spin = async () => {
    const res = await axios.post(`${API_URL}/spin/jobs`, {
      gpa: 3.7,
      interests: ["tech", "design"]
    });
    setJobs(res.data.recommended);
    setWild(res.data.wildcard);
  };

  return (
    <div>
      <button onClick={spin}>Spin for Jobs</button>
      <ul>
        {jobs.map((job, i) => <li key={i}>{job}</li>)}
        <li><strong>Wildcard:</strong> {wild}</li>
      </ul>
    </div>
  );
};

export default JobSpin;
