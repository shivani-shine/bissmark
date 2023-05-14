import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
       <Head>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" />
          <link rel="icon" href="fav.png" />
        </Head>
      <body>
        <Main />
        <NextScript />
        {/* <Chatbot /> */}
      </body>
    </Html>
  )
}