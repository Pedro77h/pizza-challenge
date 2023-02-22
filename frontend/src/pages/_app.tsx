import type { AppProps } from "next/app";
import { GlobalStyles } from "@/app/lib/GlobalStyles";
import { Theme } from "@/app/lib/theme";
import { PizzaProvider } from "@/app/contexts/PizzaContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PizzaProvider>
      <Theme>
        <GlobalStyles />
        <Component {...pageProps} />{" "}
      </Theme>
    </PizzaProvider>
  );
}
