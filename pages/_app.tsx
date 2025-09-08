import type { AppProps } from 'next/app';
import '../src/index.css';
import AnalyticsScripts from '../src/components/AnalyticsScripts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnalyticsScripts />
      <Component {...pageProps} />
    </>
  );
}
