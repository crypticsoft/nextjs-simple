/* eslint-disable react/display-name */
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="shortcut icon"
            href="/images/favicon.ico"
          />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Modern landing page templates and lead-form solutions for startups."
          />
          <meta
            name="robots"
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="/images/screenshot.png"
          />
          <meta
            property="og:title"
            content="LandUp | Landing pages & Lead Forms by iCreativepro Agency"
          />
          <meta
            property="og:description"
            content="Modern landing page templates and lead-form solutions for startups."
          />
          <meta
            property="og:url"
            content="https://landup.site/"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='anonymous' />
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Signika:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   // Render app and page and get the context of the page with collected side effects.
//   const originalRenderPage = ctx.renderPage;

//   ctx.renderPage = () =>
//     originalRenderPage({
//       // Take precedence over the CacheProvider in our custom _app.js
//       enhanceComponent: (Component) => (props) => (
//         <CacheProvider value={cache}>
//           <Component {...props} />
//         </CacheProvider>
//       ),
//     });

//   const initialProps = await Document.getInitialProps(ctx);

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//     ],
//   };
// };
