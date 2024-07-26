import React, { useState } from "react";

import { ReactComponent as Icon } from "../images/icon-star.svg";
import Rate from "./Rate";
import Ratings from "../data";
import "./Rate-Page.css";

function RatePage({ selectedRate, setSelectedRate }) {
  const [rateData, setRateData] = useState(Ratings);

  return (
    <div className="rate-container">
      <Icon className="icon" src={Icon} />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rate
        rateData={rateData}
        selectedRate={selectedRate}
        setSelectedRate={setSelectedRate}
      />
      <button>SUBMIT</button>
    </div>
  );
}

export default RatePage;
