import "../css/Country.css";
import { useState, useEffect } from "react";
import { ArrowRightLeft } from "lucide-react";
import { countryList } from "./ListCountry";
import { convertKeysToUppercase } from "../Utils/currencyUtils";

interface CountryProps {
  onFromCurrencyChange: (currency: string) => void;
  onToCurrencyChange: (currency: string) => void;
  onExchangeRateUpdate: (rate: number) => void;
}
type countryList = {
  [key: string]: string; // Key is a currency code, value is a country code
};

const Country = ({
  onFromCurrencyChange,
  onToCurrencyChange,
  onExchangeRateUpdate,
}: CountryProps) => {
  const [fromCountry, setFromCountry] = useState("US");
  const [toCountry, setToCountry] = useState("NP");
  const [rates, setRates] = useState<Record<string, number>>({});

  // Fetch exchange rates when the "From" country changes
  useEffect(() => {
    const fetchRates = async () => {
      const fromCurrency = Object.keys(countryList).find(
        (key) => countryList[key] === fromCountry
      );
      if (!fromCurrency) return;

      try {
        const response = await fetch(
          `https://2024-03-06.currency-api.pages.dev/v1/currencies/${fromCurrency.toLowerCase()}.json`
        );
        const data = await response.json();
        const processedRates = convertKeysToUppercase(
          data[fromCurrency.toLowerCase()]
        );
        setRates(processedRates);
      } catch (error) {
        console.error("Error fetching rates:", error);
      }
    };

    fetchRates();
  }, [fromCountry]);

  // Update exchange rate when "To" country changes
  useEffect(() => {
    const toCurrency = Object.keys(countryList).find(
      (key) => countryList[key] === toCountry
    );
    if (toCurrency && rates[toCurrency]) {
      onExchangeRateUpdate(rates[toCurrency]);
    }
  }, [toCountry, rates, onExchangeRateUpdate]);

  const handleFlagChangeTo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    setFromCountry(countryCode);
    const currency = Object.keys(countryList).find(
      (key) => countryList[key] === countryCode
    );
    if (currency) onFromCurrencyChange(currency);
  };

  const handleFlagChangeFrom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    setToCountry(countryCode);
    const currency = Object.keys(countryList).find(
      (key) => countryList[key] === countryCode
    );
    if (currency) onToCurrencyChange(currency);
  };

  const handleDropDown = Object.values(countryList).map((countryCode) => (
    <option key={countryCode} value={countryCode}>
      {countryCode}
    </option>
  ));

  return (
    <div className="main">
      <div className="from">
        <p>From</p>
        <div className="container1">
          <img
            src={`https://flagsapi.com/${fromCountry}/flat/64.png`}
            alt="From Country Flag"
          />
          <select value={fromCountry} onChange={handleFlagChangeTo}>
            {handleDropDown}
          </select>
        </div>
      </div>

      <ArrowRightLeft />

      <div className="to">
        <p>To</p>
        <div className="container1">
          <img
            src={`https://flagsapi.com/${toCountry}/flat/64.png`}
            alt="To Country Flag"
          />
          <select value={toCountry} onChange={handleFlagChangeFrom}>
            {handleDropDown}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Country;
