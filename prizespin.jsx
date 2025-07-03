import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../config";

const PrizeSpin = () => {
  const [prize, setPrize] = useState(null);

  const spin = async () => {
    const res = await axios.post(`${API_URL}/spin/prize`, { tokens: 12 });
    setPrize(res.data.prize);
  };

  return (
    <div>
      <button onClick={spin}>Spin for Prize</button>
      {prize && <p>You won: {prize}</p>}
    </div>
  );
};

export default PrizeSpin;
