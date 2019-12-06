import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import GlobalStyle from 'GlobalStyle'

const Root = styled.div`
  background-color: ghostwhite;
  height: 100%;
  padding: 16px;
`

const theme = createMuiTheme({})

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <SCThemeProvider theme={{}}>
      <React.Fragment>
        <Root>{children}</Root>
        <GlobalStyle />
      </React.Fragment>
    </SCThemeProvider>
  </ThemeProvider>
)
