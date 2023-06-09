import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/gallery.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
