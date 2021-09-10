import React, { useState, useEffect } from "react";
import Stock from "./components/Stock";
import axios from "axios";
import { toStock } from "./utils/stock";
import StockInput from "./components/StockInput";
import "./App.css";

function App() {
  const [stocks, setStocks] = useState([]);

  const fetchStock = async (stockSymbol) => {
    const { data } = await axios(
      `https://finnhub.io/api/v1/quote?symbol=${stockSymbol}&token=<REPLACE>`
    );
    return toStock(stockSymbol, data);
  };

  useEffect(() => {
    const timer = setInterval(async () => {
      const data = await Promise.all(
        stocks.map((stock) => fetchStock(stock.symbol))
      );
      setStocks(data);
    }, 60 * 1000);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  });

  const handleAddStock = (stockSymbol) => {
    const newStock = toStock(stockSymbol, {});
    setStocks([...stocks, newStock]);
  };

  return (
    <div className="App">
      <StockInput onAdd={handleAddStock} />
      {stocks.map((stock) => {
        return (
          <Stock
            key={stock.symbol}
            symbol={stock.symbol}
            price={stock.price}
            percentChange={stock.percentChange}
          />
        );
      })}
    </div>
  );
}

export default App;
