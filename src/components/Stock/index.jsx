import React from "react";

const Stock = ({ symbol, price, percentChange }) => {
  return (
    <div>
      <h3>{symbol}</h3>
      <p>{price}</p>
      <p>{percentChange}</p>
    </div>
  );
};

export default Stock;
