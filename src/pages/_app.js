
import { ThemeProvider } from 'next-themes'
import Header from '../Components/Header'
import '@/styles/globals.css'
import '@/styles/header.css'
import Footer from '@/Components/Footer'


function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (

  
    <ThemeProvider enableSystem={true} attribute="class">
         <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
      </ThemeProvider>
  
  )
        
}

export default MyApp
