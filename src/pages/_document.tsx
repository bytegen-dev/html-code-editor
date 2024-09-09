import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="CodE" />
        <meta property="og:description" content="Bytegen CodEditor -> Html, Css, Javascript editor and live preview" />
        <meta property="og:image" content="https://bytegen-code.vercel.app/logo.png" />
        <meta property="og:url" content="https://bytegen-code.vercel.app" />
        <meta property="og:site_name" content="CodE" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
