import "./Rate.css";

import Ratings from "../data";

function Rate({ selectedRate, setSelectedRate }) {
  const handleClick = (number) => {
    setSelectedRate(number);
  };

  const rate = Ratings.map((data, index) => {
    const isSelected = selectedRate === data.number;
    const isPreviousSelected = selectedRate === Ratings[index + 1]?.number;

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
