import '../styles/global.css';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  const router = useRouter();
  const scrollPosition = useScrollPosition();
  const [isRouteChanging, setIsRouteChanging] = useState(false);

  useEffect(() => {
    // Store scroll position before navigating away
    const handleRouteChangeStart = () => {
      const currentPath = router.asPath;
      sessionStorage.setItem(currentPath, scrollPosition.toString());
      setIsRouteChanging(true); // Trigger transition effect
    };

    // Restore scroll position when navigation is complete
    const handleRouteChangeComplete = (url: string) => {
      const savedPosition = sessionStorage.getItem(url);
      if (savedPosition) {
        window.scrollTo(0, Number(savedPosition));
      } else {
        window.scrollTo(0, 0); // Default to top if no saved position
      }
      setIsRouteChanging(false); // Route change handler will be triggered after animation
    
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    // Cleanup event listeners
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router, scrollPosition]);


  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      {/* Wrapping the page content with TransitionEffect component */}
        <Component {...pageProps} />

      <Analytics />
    </>
  );
}

export default MyApp;