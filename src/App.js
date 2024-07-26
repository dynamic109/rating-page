import React, { useState } from "react";

import RatePage from "./components/Rate-Page";
import RateSuccessful from "./components/Rate-Successful";

import "./App.css";

function App() {
  const [selectedRate, setSelectedRate] = useState(null);
  return (
    <div>
      <RatePage selectedRate={selectedRate} setSelectedRate={setSelectedRate} />
      <RateSuccessful selectedRate={selectedRate} />
    </div>
  );
}

export default App;
