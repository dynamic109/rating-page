import React, { useState } from "react";

import RatePage from "./components/Rate-Page";
import RateSuccessful from "./components/Rate-Successful";

import "./App.css";

function App() {
  const [selectedRate, setSelectedRate] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  return (
    <div className="app">
      <RatePage
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
      />
      <RateSuccessful selectedRate={selectedRate} isSubmit={isSubmit} />
    </div>
  );
}

export default App;
