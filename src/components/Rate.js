import React, { useState } from "react";
import "./Rate.css";

function Rate({ rateData, selectedRate, setSelectedRate }) {
  const handleClick = (number) => {
    setSelectedRate(number);
    console.log("Selected Rate:", number);
  };

  const rate = rateData.map((data, index) => {
    const isSelected = selectedRate === data.number;
    const isPreviousSelected = selectedRate === rateData[index + 1]?.number;

    const backgroundColor = isSelected
      ? "hsl(25, 97%, 53%)"
      : isPreviousSelected
      ? "white"
      : "hsl(213, 21%, 28%)";

    const color = isSelected
      ? "black"
      : isPreviousSelected
      ? "black"
      : "hsl(217, 12%, 63%)";

    return (
      <span
        className="rate"
        key={data.number}
        id={data.number}
        onClick={() => handleClick(data.number)}
        style={{ backgroundColor, color }}
      >
        {data.number}
      </span>
    );
  });

  return <div className="rated">{rate}</div>;
}

export default Rate;

// function handleClick(e) {
//   const id = e.target.id;
//   if (id) {
//     rateData[id].background = "blue";
//     rateData[id - 1].background = "red";
//     console.log(`Hi ${rateData[id].background}`);
//     console.log(`Hi ${id - 1} ${rateData[id - 1].background}`);
//     console.log(rateData);
//   } else {
//     console.log("error");
//   }
// }
