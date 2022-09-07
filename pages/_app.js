import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import Head from 'next/head'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={4}>
       <Head>
        <title>Edvi</title>
        <meta name="description" content="edvi-Best Teachers now a click away!" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WRF6CYGYJD"></script>
        <script type="text/javascript" src="/scripts/gtag.js" async/>
        <script type="text/javascript" src="/scripts/fb.js" async/>
        <noscript>
        <img height="1" width="1" style={{display:"none"}}
        src="https://www.facebook.com/tr?id=1058325301430692&ev=PageView&noscript=1"
        alt="fb"
        /></noscript>
      </Head>

      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
