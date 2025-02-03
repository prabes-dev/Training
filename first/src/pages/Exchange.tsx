import "../css/Exchange.css";
import { useState } from "react";
import Country from "../components/Country";

const Exchange = () => {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("NPR");
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState<string | React.ReactElement>('click exchange');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value) || 1);
  };

  const handleExchangeRateUpdate = (rate: number) => {
    setExchangeRate(rate);
  };
  const handleExchange = () => {
    setResult(
      <p>
        {amount} {fromCurrency} = {exchangeRate ? (amount * exchangeRate).toFixed(2) : "..."} {toCurrency}
      </p>
    );
  }


  return (
    <div className="exchangePage">
      <div className="Exchange_box">
        <div className="header">
          <h1>Currency Converter</h1>
          <p>
             1 {fromCurrency} = {exchangeRate ? (exchangeRate).toFixed(2) : "..."}  {toCurrency}
          </p>
        </div>
        <div className="hero">
          <div className="inputBox">
            <div className="amount">
              <input
                type="text"
                name="text"
                className="input"
                placeholder="Enter Amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="country">
              <Country
                onFromCurrencyChange={setFromCurrency}
                onToCurrencyChange={setToCurrency}
                onExchangeRateUpdate={handleExchangeRateUpdate}
              />
              
            </div>
          </div>
          <div className="ExchangeBox">
          <div className="show">
            {result}
          </div>
            <button onClick={handleExchange}>Exchange</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exchange;