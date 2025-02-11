import React from 'react';

export const AVERY_TEMPLATES = {
  // European Templates
  'L7160': {
    name: 'Avery L7160 (63.5 x 38.1 mm, 21 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 7,
      labelWidth: '63.5mm',
      labelHeight: '38.1mm',
      marginTop: '15mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  // ... (other European templates remain the same)
  
  // US Templates
  '5160': {
    name: 'Avery 5160 (1" x 2-5/8", 30 per sheet)',
    labels: {
      pageWidth: '8.5in',
      pageHeight: '11in',
      columns: 3,
      rows: 10,
      labelWidth: '2.625in',
      labelHeight: '1in',
      marginTop: '0.5in',
      marginLeft: '0.1875in',
      marginRight: '0.1875in',
      horizontalSpacing: '0.125in',
      verticalSpacing: '0'
    }
  },
  '5163': {
    name: 'Avery 5163 (2" x 4", 10 per sheet)',
    labels: {
      pageWidth: '8.5in',
      pageHeight: '11in',
      columns: 2,
      rows: 5,
      labelWidth: '4in',
      labelHeight: '2in',
      marginTop: '0.5in',
      marginLeft: '0.25in',
      marginRight: '0.25in',
      horizontalSpacing: '0.125in',
      verticalSpacing: '0'
    }
  }
};

const LabelTemplate = ({ template, barcodes }) => {
  const templateConfig = AVERY_TEMPLATES[template]?.labels;
  
  if (!templateConfig) return null;

  const containerStyle = {
    width: templateConfig.pageWidth,
    minHeight: templateConfig.pageHeight,
    margin: '0 auto',
    backgroundColor: 'white',
    position: 'relative'
  };

  // Calculate grid positions
  const positions = [];
  const labelOuterWidth = `calc(${templateConfig.labelWidth} + ${templateConfig.horizontalSpacing})`;

  for (let row = 0; row < templateConfig.rows; row++) {
    for (let col = 0; col < templateConfig.columns; col++) {
      const index = row * templateConfig.columns + col;
      if (index < barcodes.length) {
        positions.push({
          left: `calc(${templateConfig.marginLeft} + (${labelOuterWidth} * ${col}))`,
          top: `calc(${templateConfig.marginTop} + (${templateConfig.labelHeight} * ${row}))`,
          width: templateConfig.labelWidth,
          height: templateConfig.labelHeight,
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pageBreakInside: 'avoid',
          boxSizing: 'border-box'
        });
      }
    }
  }

  return (
    <div style={containerStyle}>
      {barcodes.map((barcode, index) => {
        if (index >= positions.length) return null;
        return (
          <div key={index} style={positions[index]} className="label">
            <img 
              src={barcode.image} 
              alt={barcode.value}
              style={{
                maxWidth: '90%',
                maxHeight: '90%',
                objectFit: 'contain'
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default LabelTemplate;