import React, { useState, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ onGenerate }) => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('CODE128');
  const canvasRef = useRef(null);

  const generateBarcode = () => {
    try {
      JsBarcode(canvasRef.current, barcodeValue, {
        format: barcodeFormat,
        width: 2,
        height: 100,
        displayValue: true
      });
      
      const barcodeData = canvasRef.current.toDataURL('image/png');
      onGenerate({ value: barcodeValue, image: barcodeData });
      setBarcodeValue('');
    } catch (error) {
      console.error('Error generating barcode:', error);
      alert('Error generating barcode. Please check your input value.');
    }
  };

  return (
    <div className="p-4 border rounded shadow-sm">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Barcode Value</label>
          <input
            type="text"
            value={barcodeValue}
            onChange={(e) => setBarcodeValue(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            placeholder="Enter value for barcode"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">Format</label>
          <select
            value={barcodeFormat}
            onChange={(e) => setBarcodeFormat(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          >
            <option value="CODE128">Code 128</option>
            <option value="EAN13">EAN-13</option>
            <option value="UPC">UPC</option>
            <option value="CODE39">Code 39</option>
          </select>
        </div>

        <button
          onClick={generateBarcode}
          disabled={!barcodeValue.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
        >
          Generate Barcode
        </button>

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default BarcodeGenerator;