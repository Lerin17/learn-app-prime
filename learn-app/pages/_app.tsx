import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout'

import theme from '../theme'

import { CalendarContextProvider } from '../context/CalenderContext'
import { SocketContextProvider } from '../context/SocketContext'
import { StudentContextProvider } from '../context/StudentContext'
import { StyledEngineProvider, ThemeProvider } from '@mui/material'
import { UtilityContextProvider } from '../context/UtilityContext'
import { CourseContextProvider } from '../context/CourseContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
    <StyledEngineProvider injectFirst >
      <UtilityContextProvider>
        <CourseContextProvider>
      <StudentContextProvider>
      <CalendarContextProvider>
        <SocketContextProvider>
            <Layout>
                  <Component {...pageProps} />
              </Layout>
        </SocketContextProvider>     
      </CalendarContextProvider>
      </StudentContextProvider>
      </CourseContextProvider>
      </UtilityContextProvider>

    </StyledEngineProvider>

    </ThemeProvider>
    
    
  )
  
    
}

export default MyApp
