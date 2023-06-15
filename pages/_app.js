import '../styles/globals.css'
import '../styles/nav.css'
import '../styles/gallery.css'
import '../styles/footer.css'
import '../styles/heroSection.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
