import { ThemeProvider } from "next-themes";
import Header from "../Components/Header";
import "@/styles/globals.css";
import "@/styles/header.css";
import Footer from "@/Components/Footer";
import ScrollUpButton from "react-scroll-up-button"; //Add this line Here



function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <div className=" mx-auto darkBg shadow-lg ">
      <ThemeProvider enableSystem={true} attribute="class">
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType='easeOutCubic'
          AnimationDuration={3000}
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'
          style={{}}
          ToggledStyle={{}}
          />
       
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
