import { useState } from 'react';

function QRCodeForm() {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');

  const wifi = `WIFI:T:WPA;S:${ssid};P:${password};;`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=164x164&data=${wifi}`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <form className="border-2 border-dashed border-gray px-8 py-2 text-black m-10">
      <div className="flex gap-8">
        <img width="164" src={qrSrc} alt="QR Code" />

        <div className="w-full flex flex-col justify-center gap-4">
          <label className="flex flex-col">
            Network name
            <input
              className="text-black px-5 py-2 border border-gray"
              placeholder="WiFi network name"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
            />
          </label>

          <label className="flex flex-col">
            Password
            <input
              className="text-black px-5 py-2 border border-gray"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
      </div>

      <p className="mt-4">QrCode Print</p>

      <button
        type="button"
        onClick={handlePrint}
        className="mt-2 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
      >
        Print Wifi Card
      </button>
    </form>
  );
}

export default QRCodeForm;