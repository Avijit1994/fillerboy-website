import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {


<Head>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
</Head>

  return <Component {...pageProps} />


}
