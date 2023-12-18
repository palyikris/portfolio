"use client";

import LangContextProvider from "@/context/langcontext";
import "./globals.css";
import { useLangContext } from "@/context/langcontexthook";

export default function RootLayout({ children }) {
  let { isHungarian } = useLangContext();

  return (
    <LangContextProvider>
      <html lang="hu">
        <head>
          <meta charSet="utf-8" />
          {isHungarian ? <title>Üdv</title> : <title>Welcome</title>}
          <meta httpEquiv="X-UA-Compatible" content="IE=7" />
          <meta
            name="description"
            content="Pályi Kristóf web developer saját oldala."
          />
          <meta
            name="keywords"
            content="Pályi Kristóf, web developer, webfejlesztő, webfejlesztés"
          />
          <meta name="author" content="Pályi Kristóf" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Grandiflora+One&family=Open+Sans&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Prompt&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          {children}
        </body>
      </html>
    </LangContextProvider>
  );
}
