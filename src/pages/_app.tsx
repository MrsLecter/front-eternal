import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense, useEffect, useState } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import Loader from "./loading";
import client from "@/api/apollo-client";
import { ApolloProvider } from "@apollo/client";
import ProvidersWrapper from "@/app/ProvidersWrapper";
import { Provider } from "react-redux";
import { setupStore } from "@/store";

const store = setupStore();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return (
    <Suspense fallback={<Loader />}>
      {/* <ProvidersWrapper session={session}> */}
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            {render ? <Component {...pageProps} /> : <p>Loading...</p>}
          </ThemeProvider>
        </ApolloProvider>
      </Provider>

      {/* </ProvidersWrapper> */}
    </Suspense>
  );
}
