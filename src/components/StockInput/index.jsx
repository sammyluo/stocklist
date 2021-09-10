import React, { useState } from "react";

const StockInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAddStock = () => {
    onAdd(text);
  };

  return (
    <div>
      <input value={text} onChange={(event) => setText(event.target.value)} />
      <button onClick={handleAddStock}>Add</button>
    </div>
  );
};

export default StockInput;
