# Avery Barcode Label Printer

A web application for generating barcodes and printing them on Avery label templates.

## Features

- Generate various types of barcodes (Code 128, EAN-13, UPC, Code 39)
- Support for both European (A4) and US Letter label templates
- Bulk barcode generation with range support
- Print-ready layout
- Responsive design

## Supported Label Templates

### European Templates (A4)
- L7160 (63.5 x 38.1 mm, 21 per sheet)
- L7161 (63.5 x 46.6 mm, 18 per sheet)
- L7163 (99.1 x 38.1 mm, 14 per sheet)
- L7165 (99.1 x 67.7 mm, 8 per sheet)
- L7166 (99.1 x 93.1 mm, 6 per sheet)
- L7168 (199.6 x 143.5 mm, 2 per sheet)
- L7173 (99.1 x 57.0 mm, 10 per sheet)
- J8159 (63.5 x 33.9 mm, 24 per sheet)
- J8160 (63.5 x 38.1 mm, 21 per sheet)
- L7651 (38.1 x 21.2 mm, 65 per sheet)

### US Templates (Letter)
- Avery 5160 (1" x 2-5/8", 30 per sheet)
- Avery 5163 (2" x 4", 10 per sheet)

See [TEMPLATES.md](TEMPLATES.md) for detailed specifications and printing tips.

## Installation

See [INSTALL.md](INSTALL.md) for detailed installation instructions.

## Usage

1. Select your Avery label template
2. Generate barcodes either:
   - Single barcode: Enter a value directly
   - Multiple barcodes: Use the range generator with optional prefix/suffix
3. Choose barcode format (Code 128, EAN-13, UPC, or Code 39)
4. Click "Generate Barcode" or "Generate Barcodes"
5. When ready to print, click "Print Labels"

## Technology Stack

- React
- JsBarcode
- TailwindCSS

## License

MIT