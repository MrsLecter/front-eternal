import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense, useEffect, useState } from "react";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import Loader from "./loading";
import apolloClient from "@/api/apollo-client";
import { ApolloProvider } from "@apollo/client";
import ProvidersWrapper from "@/app/ProvidersWrapper";
import { Provider } from "react-redux";
import { setupStore } from "@/store";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const store = setupStore();

export default function App({
  Component,
  pageProps,
}: // pageProps: { session, ...pageProps },
AppProps<{
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
              {render ? <Component {...pageProps} /> : <Loader />}
            </ThemeProvider>
          </ApolloProvider>
        </Provider>
      </SessionProvider>
    </Suspense>
  );
}
