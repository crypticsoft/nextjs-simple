import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// import { Analytics } from '@vercel/analytics/react';
import { builder, Builder } from '@builder.io/react';

import '../assets/css/minireset.min.css';

// kwes form styles
import '../third-party/kwes-react-form/dist/assets/loader-878652dd.css';
import '../components/FormLoader/FormLoader.css';

Builder.isStatic = true;
// Heavy handed disable fonts for perf
builder.allowCustomFonts = false;

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>LandUp | Landing pages and lead forms</title>
      </Head>

      <Component {...pageProps} />
      {/*<Analytics />*/}

    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
