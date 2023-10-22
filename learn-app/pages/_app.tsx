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
import { UserContextProvider } from '../context/UserContext'
import { AnimatePresence } from 'framer-motion'
import Router, { useRouter } from 'next/router'



function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter().asPath

  return (
    <ThemeProvider theme={theme} >
    <StyledEngineProvider injectFirst >
      <UtilityContextProvider>
      <UserContextProvider>
      <CourseContextProvider>
      <AssesmentContextProvider>
      
          <StudentContextProvider>
           <CalendarContextProvider>
            <SocketContextProvider>
            <Layout>
                  <AnimatePresence
                  initial={false}
                  >
                  <Component key={router} {...pageProps} />
                  </AnimatePresence>
              </Layout>
            </SocketContextProvider>     
          </CalendarContextProvider>
        </StudentContextProvider> 
      
      </AssesmentContextProvider>
      </CourseContextProvider>
      </UserContextProvider>
      </UtilityContextProvider>
      


    </StyledEngineProvider>

    </ThemeProvider>
    
    
  )
  
    
}

export default MyApp
