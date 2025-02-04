# Supported Avery Label Templates

This application supports both European (A4) and US Letter size label templates.

## European Templates (A4 - 210mm x 297mm)

| Template | Size (mm) | Labels/Sheet | Description |
|----------|-----------|--------------|-------------|
| L7160 | 63.5 x 38.1 | 21 | General purpose address labels |
| L7161 | 63.5 x 46.6 | 18 | Larger address labels |
| L7163 | 99.1 x 38.1 | 14 | Shipping labels |
| L7165 | 99.1 x 67.7 | 8  | Large shipping labels |
| L7166 | 99.1 x 93.1 | 6  | Extra large shipping labels |
| L7168 | 199.6 x 143.5 | 2 | Full-page shipping labels |
| L7173 | 99.1 x 57.0 | 10 | Medium shipping labels |
| J8159 | 63.5 x 33.9 | 24 | Mini address labels |
| J8160 | 63.5 x 38.1 | 21 | Standard address labels |
| L7651 | 38.1 x 21.2 | 65 | Mini labels for product marking |

## US Templates (Letter - 8.5" x 11")

| Template | Size (inches) | Labels/Sheet | Description |
|----------|---------------|--------------|-------------|
| 5160 | 1" x 2-5/8" | 30 | Standard address labels |
| 5163 | 2" x 4" | 10 | Shipping labels |

## Printing Tips

1. Always use the exact paper type specified for best results
2. Perform a test print on plain paper first
3. Hold the test print up to the label sheet to check alignment
4. In your printer settings:
   - Select the correct paper size (A4 or Letter)
   - Disable any scaling options ("Fit to page", etc.)
   - Set print quality to "Normal" or "Draft" for faster printing

## Template Selection Guide

- For small product barcodes: L7651
- For standard address labels: L7160 or J8160
- For shipping labels: L7165 or L7166
- For large format labels: L7168

## Adding Custom Templates

If you need a template that's not listed here, you can add it to the `AVERY_TEMPLATES` object in `src/components/LabelTemplate.jsx`. Use the following format:

```javascript
'TEMPLATE_CODE': {
  name: 'Template Name (dimensions)',
  labels: {
    pageWidth: '210mm',      // Page width
    pageHeight: '297mm',     // Page height
    columns: 3,              // Number of columns
    rows: 7,                 // Number of rows
    labelWidth: '63.5mm',    // Label width
    labelHeight: '38.1mm',   // Label height
    marginTop: '15mm',       // Top margin
    marginLeft: '7.2mm',     // Left margin
    marginRight: '7.2mm',    // Right margin
    horizontalSpacing: '2.5mm', // Space between columns
    verticalSpacing: '0'     // Space between rows
  }
}