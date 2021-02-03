import { ThemeProvider } from 'theme-ui'
import {theme} from '../theme'
import React from 'react'
import type { AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp