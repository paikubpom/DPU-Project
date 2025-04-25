import React, { useState } from 'react';

const LanguageTranslator = () => {
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [translateFrom, setTranslateFrom] = useState('auto');
  const [translateTo, setTranslateTo] = useState('en');
  const [darkMode, setDarkMode] = useState(false);

  const handleTranslate = async () => {
    if (!fromText) return;
    const URL = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(fromText)}&langpair=${translateFrom}|${translateTo}`;

    try {
      const res = await fetch(URL);
      const data = await res.json();
      setToText(data.responseData.translatedText);
    } catch (err) {
      console.error('แปลไม่ได้:', err);
    }
  };

  const handleSwap = () => {
    const temp = translateFrom;
    setTranslateFrom(translateTo);
    setTranslateTo(temp);
    setFromText(toText);
    setToText('');
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} min-h-screen p-6`}>
      <div className="max-w-xl mx-auto border p-6 rounded-lg shadow-lg bg-opacity-90 bg-gray-100 dark:bg-gray-800">
        <h1 className="text-2xl font-bold text-center mb-4">Language Translator</h1>

        <textarea
          className="w-full p-3 border rounded mb-3 dark:bg-gray-700 dark:text-white"
          rows="4"
          placeholder="พิมพ์ข้อความที่ต้องการแปล..."
          value={fromText}
          onChange={(e) => setFromText(e.target.value)}
        ></textarea>

        <textarea
          className="w-full p-3 border rounded mb-3 bg-gray-200 dark:bg-gray-600 dark:text-white"
          rows="4"
          placeholder="ผลลัพธ์การแปล"
          value={toText}
          readOnly
        ></textarea>

        <div className="flex items-center justify-between mb-4">
          <select
            className="w-1/2 mr-2 p-2 border rounded dark:bg-gray-700 dark:text-white"
            value={translateFrom}
            onChange={(e) => setTranslateFrom(e.target.value)}
          >
            {/* <option value="auto">ตรวจจับภาษา</option> */}
            <option value="en">English</option>
            <option value="th">Thai</option>
            {/* <option value="hi">Hindi</option>
            <option value="es">Spanish</option> */}
          </select>

          <button
            onClick={handleSwap}
            className="p-2 bg-gray-300 dark:bg-gray-600 rounded hover:bg-gray-400 dark:hover:bg-gray-500"
          >
            ⇄
          </button>

          <select
            className="w-1/2 ml-2 p-2 border rounded dark:bg-gray-700 dark:text-white"
            value={translateTo}
            onChange={(e) => setTranslateTo(e.target.value)}
          >
            <option value="en">English</option>
            <option value="th">Thai</option>
            {/* <option value="hi">Hindi</option>
            <option value="es">Spanish</option> */}
          </select>
        </div>

        <button
          onClick={handleTranslate}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded mb-2"
        >
          แปลภาษา
        </button>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-full bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded"
        >
          เปลี่ยนเป็นโหมด {darkMode ? 'สว่าง' : 'มืด'}
        </button>
      </div>
    </div>
  );
};

export default LanguageTranslator;
