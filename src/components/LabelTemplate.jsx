import React from 'react';

export const AVERY_TEMPLATES = {
  '5160': {
    name: 'Avery 5160',
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
    name: 'Avery 5163',
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
    padding: '0.125in',
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