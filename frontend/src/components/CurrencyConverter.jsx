import React, { useState, useEffect } from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("EUR");
  const [rates, setRates] = useState({});
  const [result, setResult] = useState("");

  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.toLowerCase()}.json`)
      .then((res) => res.json())
      .then((data) => setRates(data[from.toLowerCase()]))
      .catch((err) => console.error("Error fetching conversion rates:", err));
  }, [from]);

  const handleConvert = () => {
    if (rates[to.toLowerCase()]) {
      const converted = (amount * rates[to.toLowerCase()]).toFixed(2);
      setResult(`${amount} ${from} = ${converted} ${to}`);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100 mt-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        💱 Currency Converter
      </h3>
      <div className="space-y-3">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded-lg text-sm text-black"
          placeholder="Amount"
        />
        <div className="grid grid-cols-2 gap-2">
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="p-2 border rounded-lg text-sm bg-gray-50 text-black">
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="p-2 border rounded-lg text-sm bg-gray-50 text-black">
            <option value="LKR">LKR - Sri Lankan Rupee</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
        </div>
        <button onClick={handleConvert} className="w-full bg-blue-600 text-white p-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
          Convert Currency
        </button>
        {result && (
          <p className="mt-3 text-center font-bold text-gray-800 bg-gray-50 p-2 rounded-lg text-sm border">{result}</p>
        )}
      </div>
    </div>
  );
}
