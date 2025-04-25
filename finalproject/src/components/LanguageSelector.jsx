import React from 'react';

const LanguageSelector = ({ value, onChange, position }) => {
  return (
    <select
      className={`w-1/2 p-2 border rounded dark:bg-gray-700 dark:text-white ${position === 'left' ? 'mr-2' : 'ml-2'}`}
      value={value}
      onChange={onChange}
    >
      {position === 'left' && <option value="auto">ตรวจจับภาษา</option>}
      <option value="en">English</option>
      <option value="th">Thai</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="ja">Japanese</option>
      <option value="zh">Chinese</option>
    </select>
  );
};

export default LanguageSelector;
