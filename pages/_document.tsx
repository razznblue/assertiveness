import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          {/* <link rel="apple-touch-icon" href="/icon.png" /> */}
          <meta name="theme-color" content="#fff" />
          <link rel="icon" href="/icons/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
