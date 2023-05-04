import { ThemeProvider } from "next-themes";
import Header from "../Components/Header";
import "@/styles/globals.css";
import "@/styles/header.css";
import Footer from "@/Components/Footer";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <div className="">
      <ThemeProvider enableSystem={true} attribute="class">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
