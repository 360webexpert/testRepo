// _app.js
import React from 'react';
import '../styles/globals.css';
// import DefaultLayout from '../components/Layouts/DefaultLayout';

function MyApp({ Component, pageProps }) {
//   const Layout = Component.Layout || DefaultLayout;

  return (
    // <Layout/>
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
