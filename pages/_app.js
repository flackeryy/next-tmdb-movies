import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import 'styles/main.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Movies</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
