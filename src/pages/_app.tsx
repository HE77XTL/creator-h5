import {AppProps} from 'next/app';
import 'antd/dist/antd.css'
import Head from 'next/head';

// @ts-ignore
export default function App({Component, pageProps}: AppProps) {
  return <>
    <Head>
      <title>creator</title>
    </Head>
    <Component {...pageProps} />
  </>;

}
