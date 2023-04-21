import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense, useEffect, useState } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { ParallaxProvider } from "react-scroll-parallax";
import Loader from "./loading";
import client from "@/api/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return (
    <Suspense fallback={<Loader />}>
      <ParallaxProvider scrollAxis="vertical">
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            {render ? (
              <Component {...pageProps} />
            ) : (
              <p>Error during loading</p>
            )}
          </ThemeProvider>
        </ApolloProvider>
      </ParallaxProvider>
    </Suspense>
  );
}
