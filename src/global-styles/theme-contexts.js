import { createMuiTheme } from '@material-ui/core/styles'

import { colorParams, fontParams } from './theme-params'

import getFontColor from './util'

export const materialTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: fontParams.fontFamily
  },
  palette: {
    common: {
      black: fontParams.fontColorBlack,
      white: fontParams.fontColorWhite
    },
    primary: {
      main: colorParams.colorPrimary
    },
    secondary: {
      main: colorParams.colorSecondary
    }
  }, 
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: colorParams.fontWhite
      }
    }
  }
})

export const customTheme = {
  typography: {
    fontFamily: fontParams.fontFamily,
    colorBlack: fontParams.fontColorBlack,
    colorWhite: fontParams.fontColorWhite,
    colorLightGray: fontParams.fontColorLightGray,
    colorDarkGray: fontParams.fontColorDarkGray,
    sizeDefault: fontParams.fontDefaultSize,
    getColor: (color) => getFontColor(color, fontParams.fontColorWhite, fontParams.fontColorBlack)
  },
  color: {
    primary: colorParams.colorPrimary,
    secondary: colorParams.colorSecondary,
    warning: colorParams.colorWarning,
    error: colorParams.colorError,
    enabled: colorParams.colorEnabled,
    forbidden: colorParams.colorForbbiden,
    red: colorParams.colorRed,
    yellow: colorParams.colorYellow,
    darkblue: colorParams.colorDarkBlue,
    mediumblue: colorParams.colorMediumBlue,
    lightblue: colorParams.colorLightBlue
  },
  spacing: {
    defaultPadding: '1rem',
    defaultMargin: '1rem'
  },
  util: {
    remCalc: (value) => `${(value / 16)}rem`
  }
}
