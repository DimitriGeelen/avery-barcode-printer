import React, { useState } from 'react';
import BarcodeGenerator from './components/BarcodeGenerator';
import LabelTemplate, { AVERY_TEMPLATES } from './components/LabelTemplate';

function App() {
  const [barcodes, setBarcodes] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState('5160');

  const handleBarcodeGenerate = (barcode) => {
    setBarcodes([...barcodes, barcode]);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleClear = () => {
    setBarcodes([]);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center">Avery Label Barcode Printer</h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Label Template</label>
            <select
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            >
              {Object.entries(AVERY_TEMPLATES).map(([key, template]) => (
                <option key={key} value={key}>{template.name}</option>
              ))}
            </select>
          </div>
          
          <BarcodeGenerator onGenerate={handleBarcodeGenerate} />
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleClear}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear All
          </button>
          <button
            onClick={handlePrint}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Print Labels
          </button>
        </div>

        <div className="print-section bg-white p-4 rounded-lg shadow-sm">
          <LabelTemplate template={selectedTemplate} barcodes={barcodes} />
        </div>
      </div>
    </div>
  );
}

export default App;