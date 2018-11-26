import { createMuiTheme } from '@material-ui/core/styles'

export const materialTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Arial", "Helvetica", sans-serif'
  },
  palette: {
    common: {
      black: 'rgba(1,1,1,1)',
      white: 'rgba(254,254,254,1)'
    },
    primary: {
      main: 'rgba(26,117,207,1)'
    },
    secondary: {
      main: 'rgba(253,187,48,1)'
    }
  }
})
