import React, { useState, useRef } from 'react';
import JsBarcode from 'jsbarcode';

const BarcodeGenerator = ({ onGenerate }) => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [barcodeFormat, setBarcodeFormat] = useState('CODE128');
  const [isRange, setIsRange] = useState(false);
  const [rangeStart, setRangeStart] = useState('');
  const [rangeEnd, setRangeEnd] = useState('');
  const [prefix, setPrefix] = useState('');
  const [suffix, setSuffix] = useState('');
  const [padding, setPadding] = useState(0);
  const canvasRef = useRef(null);

  const generateSingleBarcode = (value) => {
    try {
      JsBarcode(canvasRef.current, value, {
        format: barcodeFormat,
        width: 2,
        height: 100,
        displayValue: true
      });
      
      return canvasRef.current.toDataURL('image/png');
    } catch (error) {
      console.error('Error generating barcode:', error);
      return null;
    }
  };

  const generateBarcodeRange = () => {
    const start = parseInt(rangeStart);
    const end = parseInt(rangeEnd);
    
    if (isNaN(start) || isNaN(end) || start > end) {
      alert('Please enter valid range values');
      return;
    }

    for (let i = start; i <= end; i++) {
      const paddedNumber = i.toString().padStart(padding, '0');
      const value = `${prefix}${paddedNumber}${suffix}`;
      const barcodeImage = generateSingleBarcode(value);
      if (barcodeImage) {
        onGenerate({ value, image: barcodeImage });
      }
    }
  };

  const generateBarcode = () => {
    if (isRange) {
      generateBarcodeRange();
    } else {
      const barcodeImage = generateSingleBarcode(barcodeValue);
      if (barcodeImage) {
        onGenerate({ value: barcodeValue, image: barcodeImage });
        setBarcodeValue('');
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isRange"
          checked={isRange}
          onChange={(e) => setIsRange(e.target.checked)}
          className="rounded border-gray-300"
        />
        <label htmlFor="isRange" className="text-sm font-medium text-gray-700">
          Generate Range of Barcodes
        </label>
      </div>

      {!isRange ? (
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
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Range Start</label>
              <input
                type="number"
                value={rangeStart}
                onChange={(e) => setRangeStart(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Start number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Range End</label>
              <input
                type="number"
                value={rangeEnd}
                onChange={(e) => setRangeEnd(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="End number"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Prefix</label>
              <input
                type="text"
                value={prefix}
                onChange={(e) => setPrefix(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Optional prefix"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Suffix</label>
              <input
                type="text"
                value={suffix}
                onChange={(e) => setSuffix(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                placeholder="Optional suffix"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Number Padding</label>
            <input
              type="number"
              min="0"
              value={padding}
              onChange={(e) => setPadding(parseInt(e.target.value) || 0)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
              placeholder="Number of digits (adds leading zeros)"
            />
          </div>
        </div>
      )}
      
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
        disabled={(!isRange && !barcodeValue.trim()) || (isRange && (!rangeStart || !rangeEnd))}
        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        Generate {isRange ? 'Barcodes' : 'Barcode'}
      </button>

      <canvas ref={canvasRef} className="hidden" />
    </div>
  );
};

export default BarcodeGenerator;