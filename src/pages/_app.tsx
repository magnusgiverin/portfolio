import Footer from '../components/Footer/Footer';
import '../styles/global.css';
import { Analytics } from "@vercel/analytics/react";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand&display=swap" 
          rel="stylesheet" 
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}

export default MyApp;
