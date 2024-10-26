import '../styles/global.css';
import { Analytics } from "@vercel/analytics/react"

function MyApp({ Component, pageProps }) {
  return (
    <Analytics>
      <Component {...pageProps} />;
    </Analytics>
  )
}

export default MyApp;