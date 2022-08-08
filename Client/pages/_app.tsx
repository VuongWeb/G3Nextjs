import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from './models/Layout';
import LayoutClient from '../components/Layout';
import { SWRConfig } from 'swr';
import instance from '../api/config';




function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? LayoutClient;
  return (<LayoutWapper>
    <SWRConfig value={{
      fetcher: async (url: string) => instance.get(url),
    }}>
      <Component {...pageProps} />
    </SWRConfig>
  </LayoutWapper>)
}
export default MyApp
