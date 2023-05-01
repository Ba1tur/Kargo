import Layouts from '@/components/Layouts/Layout'
import '@/styles/globals.css'
import '@/styles/RecentDeliveriesSlide.css'
import '@/styles/CustomerSlide.css'

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  ) 
}
