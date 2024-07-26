import React from "react";

import { ReactComponent as Icon } from "../images/icon-star.svg";
import Rate from "./Rate";
import "./Rate-Page.css";

function RatePage({ selectedRate, setSelectedRate, isSubmit, setIsSubmit }) {
  const changeDisplayNone = {
    display: "none",
  };
  const changeDisplayFlex = {
    display: "flex",
  };
  function handleSubmit() {
    setIsSubmit(true);
  }

  return (
    <div
      className="rate-container"
      style={isSubmit ? changeDisplayNone : changeDisplayFlex}
    >
      <Icon className="icon" src={Icon} />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rate selectedRate={selectedRate} setSelectedRate={setSelectedRate} />
      <button onClick={selectedRate && handleSubmit}>SUBMIT</button>
    </div>
  );
}

export default RatePage;
