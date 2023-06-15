import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense, useEffect, useState } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import Loader from "../componets/common/loader/Loader";
import apolloClient from "@/api/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { setupStore } from "@/store";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";
import ClientOnly from "../utils/ClientOnly";

const store = setupStore();

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  const [render, setRender] = useState(false);
  useEffect(() => setRender(true), []);

  return (
    <Suspense fallback={<Loader />}>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
              <ClientOnly>
                {render ? <Component {...pageProps} /> : <Loader />}
              </ClientOnly>
            </ThemeProvider>
          </ApolloProvider>
        </Provider>
      </SessionProvider>
    </Suspense>
  );
}
