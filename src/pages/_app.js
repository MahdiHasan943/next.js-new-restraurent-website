import { ThemeProvider } from "next-themes";
import Header from "../Components/Header";
import "@/styles/globals.css";
import "@/styles/header.css";
import Footer from "@/Components/Footer";
import GoToTop from "@/Components/GoToTop";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <div className=" mx-auto  shadow-lg ">
      <ThemeProvider enableSystem={true} attribute="class">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
        <GoToTop></GoToTop>
      </ThemeProvider>
      
    </div>
  );
}

export default MyApp;
