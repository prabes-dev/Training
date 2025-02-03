import { useState } from "react";
import { convertKeysToUppercase } from "../Utils/currencyUtils";

type ExchangeRates = {
  [key: string]: number;
};

type DataState =
  | string
  | {
      base: string;
      rates: ExchangeRates;
    };

const Api = () => {
  const [data, setData] = useState<DataState>("Click to fetch data");

  const getData = async () => {
    try {
      const response = await fetch(
        "https://2024-03-06.currency-api.pages.dev/v1/currencies/usd.json"
      );
      const json: { usd: ExchangeRates } = await response.json();

      // Convert currency keys to uppercase
      const processedData = {
        base: "USD",
        rates: convertKeysToUppercase(json.usd),
      };

      setData(processedData);
    } catch (error) {
      console.error("Error fetching data", error);
      setData("Error fetching data");
    }
  };

  return (
    <div>
      <pre>
        {typeof data === "string" ? data : JSON.stringify(data, null, 2)}
      </pre>
      <button onClick={getData}>click</button>
    </div>
  );
};

export default Api;
