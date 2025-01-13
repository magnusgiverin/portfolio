import "../styles/global.css";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // Cleanup event listeners
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, scrollPosition]);

  return (
    <>
      <Head>
        {/* Essential meta tags */}
        <title>Magnus Giverin</title>
        <meta name="description" content="The portfolio website for Magnus Andreas Giverin." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Magnus Andreas Giverin" />
        <meta name="keywords" content="design, developer, ntnu, student, projects, coding" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      </Head>

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2GPC8SMCVB"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2GPC8SMCVB');
        `}
      </Script>

      {/* Wrapping the page content with TransitionEffect component */}
      <Component {...pageProps} />

      <Analytics />
    </>
  );
}

export default MyApp;