import {AppProps} from 'next/app';
import Head from 'next/head';
// @ts-ignore
import { Inter } from '@next/font/google'
const inter = Inter()

// @ts-ignore
export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>creator</title>
    </Head>
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  </>;

}
