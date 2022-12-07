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
import { AssesmentContextProvider } from '../context/AssesmentContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
    <StyledEngineProvider injectFirst >
    <CourseContextProvider>
      <AssesmentContextProvider>
      <UtilityContextProvider>
          <StudentContextProvider>
           <CalendarContextProvider>
            <SocketContextProvider>
            <Layout>
                  <Component {...pageProps} />
              </Layout>
            </SocketContextProvider>     
          </CalendarContextProvider>
        </StudentContextProvider> 
      </UtilityContextProvider>
      </AssesmentContextProvider>
      </CourseContextProvider>

    </StyledEngineProvider>

    </ThemeProvider>
    
    
  )
  
    
}

export default MyApp
