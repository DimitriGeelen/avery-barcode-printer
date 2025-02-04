# Avery Barcode Label Printer

A web application for generating barcodes and printing them on Avery label templates.

## Features

- Generate various types of barcodes (Code 128, EAN-13, UPC, Code 39)
- Support for multiple Avery label templates (5160, 5163)
- Print-ready layout
- Responsive design

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Select your Avery label template
2. Enter the barcode value and select the format
3. Click 'Generate Barcode' to add it to the template
4. Click 'Print Labels' when ready to print

## Supported Label Templates

- Avery 5160 (1" x 2-5/8", 30 labels per sheet)
- Avery 5163 (2" x 4", 10 labels per sheet)

## Technology Stack

- React
- JsBarcode
- TailwindCSS

## License

MIT