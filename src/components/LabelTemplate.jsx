import React from 'react';

export const AVERY_TEMPLATES = {
  // Standard European Label Templates
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
  'L7161': {
    name: 'Avery L7161 (63.5 x 46.6 mm, 18 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 6,
      labelWidth: '63.5mm',
      labelHeight: '46.6mm',
      marginTop: '13mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7163': {
    name: 'Avery L7163 (99.1 x 38.1 mm, 14 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 7,
      labelWidth: '99.1mm',
      labelHeight: '38.1mm',
      marginTop: '15mm',
      marginLeft: '4.65mm',
      marginRight: '4.65mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7165': {
    name: 'Avery L7165 (99.1 x 67.7 mm, 8 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 4,
      labelWidth: '99.1mm',
      labelHeight: '67.7mm',
      marginTop: '13mm',
      marginLeft: '4.65mm',
      marginRight: '4.65mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7166': {
    name: 'Avery L7166 (99.1 x 93.1 mm, 6 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 3,
      labelWidth: '99.1mm',
      labelHeight: '93.1mm',
      marginTop: '12.5mm',
      marginLeft: '4.65mm',
      marginRight: '4.65mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'L7168': {
    name: 'Avery L7168 (199.6 x 143.5 mm, 2 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 1,
      rows: 2,
      labelWidth: '199.6mm',
      labelHeight: '143.5mm',
      marginTop: '9mm',
      marginLeft: '5.2mm',
      marginRight: '5.2mm',
      horizontalSpacing: '0',
      verticalSpacing: '0'
    }
  },
  'L7173': {
    name: 'Avery L7173 (99.1 x 57 mm, 10 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 2,
      rows: 5,
      labelWidth: '99.1mm',
      labelHeight: '57mm',
      marginTop: '13mm',
      marginLeft: '4.65mm',
      marginRight: '4.65mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'J8159': {
    name: 'Avery J8159 (63.5 x 33.9 mm, 24 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 3,
      rows: 8,
      labelWidth: '63.5mm',
      labelHeight: '33.9mm',
      marginTop: '13mm',
      marginLeft: '7.2mm',
      marginRight: '7.2mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  'J8160': {
    name: 'Avery J8160 (63.5 x 38.1 mm, 21 per sheet)',
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
  'L7651': {
    name: 'Avery L7651 (38.1 x 21.2 mm, 65 per sheet)',
    labels: {
      pageWidth: '210mm',
      pageHeight: '297mm',
      columns: 5,
      rows: 13,
      labelWidth: '38.1mm',
      labelHeight: '21.2mm',
      marginTop: '13mm',
      marginLeft: '8.5mm',
      marginRight: '8.5mm',
      horizontalSpacing: '2.5mm',
      verticalSpacing: '0'
    }
  },
  // US Templates for compatibility
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

  const labelStyle = {
    width: templateConfig.labelWidth,
    height: templateConfig.labelHeight,
    margin: `0 ${templateConfig.horizontalSpacing} ${templateConfig.verticalSpacing} 0`,
    padding: '2mm',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    pageBreakInside: 'avoid'
  };

  const pageStyle = {
    width: templateConfig.pageWidth,
    minHeight: templateConfig.pageHeight,
    padding: `${templateConfig.marginTop} ${templateConfig.marginRight} 0 ${templateConfig.marginLeft}`,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    backgroundColor: 'white'
  };

  return (
    <div style={pageStyle}>
      {barcodes.map((barcode, index) => (
        <div key={index} style={labelStyle} className="label">
          <img 
            src={barcode.image} 
            alt={barcode.value}
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>
      ))}
    </div>
  );
};

export default LabelTemplate;