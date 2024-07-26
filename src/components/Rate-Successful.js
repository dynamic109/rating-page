import React from "react";

import { ReactComponent as Icon } from "../images/illustration-thank-you.svg";
import "./Rate-Successful.css";

function RateSuccessful({ selectedRate, isSubmit }) {
  const changeDisplayNone = {
    display: "none",
  };
  const changeDisplayFlex = {
    display: "flex",
  };
  return (
    <div
      className="rate-successful"
      style={isSubmit ? changeDisplayFlex : changeDisplayNone}
    >
      <Icon src={Icon} />
      <p className="rating-selected">You selected {selectedRate} out of 5</p>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default RateSuccessful;
