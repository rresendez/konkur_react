
const colorParams = {
  fontBlack: 'rgba(1,1,1,1)',
  fontWhite: 'rgba(254,254,254,1)',
  colorPrimary: 'rgba(26,117,207,1)',
  colorSecondary: 'rgba(253,187,48,1)',
  colorWarning: 'rgba(255,235,59,1)',
  colorError: 'rgba(176,0,32,1)',
  colorEnabled: 'rgba(118,255,3,1)',
  colorForbbiden: 'rgba(176,0,32,1)'
}

const fontParams = {
  fontFamily: '"Arial", "Helvetica", sans-serif',
  fontDefaultSize: '1rem',
  fontColorBlack: colorParams.fontBlack,
  fontColorWhite: colorParams.fontWhite,
  fontColorLightGray: 'rgba(161,161,161,1)',
  fontColorDarkGray: 'rgba(51,51,51,1)'
}

module.exports.customProperties = colorParams
module.exports.colorParams = colorParams
module.exports.fontParams = fontParams
