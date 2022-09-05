import { CssBaseline } from "@nextui-org/react";
import Document, { Head, DocumentContext, DocumentInitialProps, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initalProps = await Document.getInitialProps(ctx)
    return {
      ...initalProps,
      styles: React.Children.toArray([initalProps.styles])
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="es">
        <Head>{CssBaseline.flush()}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
