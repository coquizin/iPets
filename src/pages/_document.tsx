import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href={`/favicon.ico`} />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="apple-mobile-web-app-title" content="iPets" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="site_name" property="og:site_name" content="iPets" />
        <meta name="author" content="iPets" />
        <meta name="locale" property="og:locale" content="pt-br" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
