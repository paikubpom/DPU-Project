import { Link } from "react-router-dom";

export default function BankRates() {
  const banks = [
    { name: "ธนาคารกสิกรไทย", rate: "2.25%", icon: "💚" },
    { name: "ธนาคารไทยพาณิชย์", rate: "2.50%", icon: "💜" },
    { name: "ธนาคารกรุงศรีอยุธยา", rate: "2.75%", icon: "💛" },
    { name: "ธนาคารกรุงเทพ", rate: "2.65%", icon: "💙" },
    { name: "ธนาคารออมสิน", rate: "3.00%", icon: "💖" }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4 py-12">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-gray-800 dark:text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">📋 อัตราดอกเบี้ยธนาคาร</h2>

        <div className="space-y-4">
          {banks.map((bank, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{bank.icon}</span>
                <span className="font-semibold">{bank.name}</span>
              </div>
              <span className="text-blue-600 dark:text-blue-300 font-bold">{bank.rate}</span>
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="block text-center mt-8 text-blue-600 dark:text-blue-400 underline"
        >
          ← กลับไปหน้าเครื่องคิดเลข
        </Link>
      </div>
    </div>
  );
}