"use client";
import { useState } from "react";
const Form = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    fetch(
      ` https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
      {
        headers: {
          apikey: "AbpZdrnxcdQIx2H86u67hpcxSc9JEn0P",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setResult(data.result);
        setLoading(false);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setAmount(e.target.value)}
        className="border-2  text-gray-700 border-gray-400 rounded-lg p-4 m-4 w-80"
        type="text"
        placeholder="Enter Amount"
      />
      <select
        onChange={(e) => setFromCurrency(e.target.value)}
        className="border-2 text-gray-800 border-gray-400 rounded-lg p-4 m-4 w-80">
        <option>USD</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>INR</option>
      </select>
      <select
        onChange={(e) => setToCurrency(e.target.value)}
        className="border-2 text-gray-800 border-gray-400 rounded-lg p-4 m-4 w-80">
        <option>INR</option>
        <option>EUR</option>
        <option>GBP</option>
        <option>USD</option>
      </select>
      <button className="border-2 border-gray-400 rounded-lg p-4 m-4 w-80">
        Convert
      </button>
      {loading ? (
        <p className="text-2xl font-bold ">Loading...</p>
      ) : (
        <p className="text-2xl font-bold">{result}</p>
      )}
    </form>
  );
};

export default Form;
