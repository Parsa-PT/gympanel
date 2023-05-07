import "@/styles/globals.css";
import { Lalezar } from "next/font/google";
import { StoreProvider } from "@/context/cart";

const lalezar = Lalezar({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps : {session , ...pageProps} }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${lalezar.style.fontFamily};
        }
      `}</style>

    
        <StoreProvider>
          <Component {...pageProps} />
        </StoreProvider>
    
    </>
  );
}
