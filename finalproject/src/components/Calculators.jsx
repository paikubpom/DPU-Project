import { useState } from "react";
import { Link } from "react-router-dom";

const bankOptions = [
  { name: "เลือกธนาคาร", rate: "" },
  { name: "ธนาคารกสิกรไทย", rate: 2.25 },
  { name: "ธนาคารไทยพาณิชย์", rate: 2.5 },
  { name: "ธนาคารกรุงศรีอยุธยา", rate: 2.75 },
  { name: "ธนาคารกรุงเทพ", rate: 2.65 },
  { name: "ธนาคารออมสิน", rate: 3.0 }
];

export default function Calculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [months, setMonths] = useState("");
  const [result, setResult] = useState(null);

  const handleBankChange = (e) => {
    const selectedBank = bankOptions.find((b) => b.name === e.target.value);
    if (selectedBank && selectedBank.rate) {
      setRate(selectedBank.rate);
    }
  };

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const m = parseFloat(months);
    const interest = p * r * m;
    const total = p + interest;
    setResult({ interest, total });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl text-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold text-center mb-1">
          คำนวณดอกเบี้ยรายเดือน
        </h2>
        <Link
          to="/rates"
          className="text-blue-600 dark:text-blue-400 underline text-sm block text-center mb-6"
        >
          อัตราดอกเบี้ยเพิ่มเติม
        </Link>

        <label className="block font-semibold mb-1">🏦 เลือกธนาคาร</label>
        <select
          onChange={handleBankChange}
          className="w-full border p-2 rounded-lg mb-4 text-gray-800"
        >
          {bankOptions.map((bank, idx) => (
            <option key={idx}>{bank.name}</option>
          ))}
        </select>

        <label className="block font-semibold mb-1">💰 ยอดเงินฝาก (บาท)</label>
        <input
          type="number"
          placeholder="เช่น 10000"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 text-black"
        />

        <label className="block font-semibold mb-1">📈 อัตราดอกเบี้ยต่อปี (%)</label>
        <input
          type="number"
          placeholder="เช่น 2.5"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4 text-black"
        />

        <label className="block font-semibold mb-1">🕒 ระยะเวลา (เดือน)</label>
        <input
          type="number"
          placeholder="เช่น 36"
          value={months}
          onChange={(e) => setMonths(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6 text-black"
        />

        <button
          onClick={calculate}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg text-lg font-medium transition-all"
        >
          คำนวณ
        </button>

        {result && (
          <div className="mt-6 text-center text-lg font-semibold space-y-1">
            <p>ดอกเบี้ยรวม: {result.interest.toFixed(2)} บาท</p>
            <p>ยอดรวม: {result.total.toFixed(2)} บาท</p>
          </div>
        )}
      </div>
    </div>
  );
}