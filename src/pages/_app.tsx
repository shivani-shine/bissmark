import 'Styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import store from 'Redux/store';
import "bootstrap/dist/css/bootstrap.min.css"; 
import Layout from './layout';


export default function App({ Component, pageProps }: AppProps) {
  const { title, desc, keywords } = pageProps
  return (
    <Provider store={store}>
      <Layout title={title} desc={desc} keywords={keywords}>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
