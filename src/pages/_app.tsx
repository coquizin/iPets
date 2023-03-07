import Default from "@/layouts/default";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="rgb(255, 255, 255)" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-title" content="iPets" />
        <meta content="width=device-width,initial-scale=1" name="viewport" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="site_name" property="og:site_name" content="iPets" />
        <meta name="author" content="iPets" />
        <meta name="locale" property="og:locale" content="pt-br" />
      </Head>
      <Default>
        <Component {...pageProps} />
      </Default>
    </>
  );
}
