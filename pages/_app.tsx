import "../public/static/styles/main.scss";
import '../public/static/styles/index.scss';
import '../public/static/styles/portfolio.scss';

import { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}