import { AppProps } from 'next/app';
import '@vetixy/circular-std';

import '@/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
