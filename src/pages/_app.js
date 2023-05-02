
import { ThemeProvider } from 'next-themes'
import Header from '../Components/Header'
import '@/styles/globals.css'
import '@/styles/header.css'


function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (

  
    <ThemeProvider enableSystem={true} attribute="class">
         <Header></Header>
       <Component {...pageProps} />
      </ThemeProvider>
  
  )
        
}

export default MyApp
