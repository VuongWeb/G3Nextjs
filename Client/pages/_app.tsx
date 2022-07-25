import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from './models/Layout';
import LayoutClient from '../components/Layout';




function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? LayoutClient;
  return (<LayoutWapper> <Component {...pageProps}/></LayoutWapper>)
}
export default MyApp
