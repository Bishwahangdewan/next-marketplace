import '../styles/globals.css'
import { SnackbarProvider } from 'notistack';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider maxSnack={4}>
       <Head>
        <title>Edvi</title>
        <meta name="description" content="edvi-Best Teachers now a click away!" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Component {...pageProps} />
    </SnackbarProvider>
  )
}

export default MyApp
