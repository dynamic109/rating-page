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
      ? "gold"
      : isPreviousSelected
      ? "blue"
      : "green";

    return (
      <div
        className="rate"
        key={data.number}
        id={data.number}
        onClick={() => handleClick(data.number)}
        style={{ backgroundColor }}
      >
        {data.number}
      </div>
    );
  });

  return <div>{rate}</div>;
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
