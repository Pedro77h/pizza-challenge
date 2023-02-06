import type { AppProps } from "next/app";
import { GlobalStyles } from "@/app/lib/GlobalStyles";
import { Theme } from "@/app/lib/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <GlobalStyles />
      <Component {...pageProps} />{" "}
    </Theme>
  );
}
