import Layouts from '@/components/Layouts/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  ) 
}
