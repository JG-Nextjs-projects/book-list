import '../styles/globals.css'
import LayoutDefault from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || LayoutDefault

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
