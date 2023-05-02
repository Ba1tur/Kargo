import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero/Hero'
import DeliveryDetails from '@/components/DeliveryDetails/DeliveryDetails'
import RecentDeliveries from '@/components/RecentDeliveries/RecentDeliveries'
import ContactUs from '@/components/ContactUs/ContactUs'
import Info from '@/components/Info/Info'
import Price from '@/components/Pirce/Price'
import TableBlock from '@/components/Table/TableBlock'
import Customer from '@/components/Customer/Customer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kargo</title>
        <meta name="description" content="Created by snowflake" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Hero />
      <Info />
      <DeliveryDetails />
      <Price />
      <TableBlock />
      <RecentDeliveries />
      <Customer/>
      <ContactUs />
      {/* <DeliveryDetails/> */}
      {/* <Price /> */}
      {/* <RecentDeliveries/> */}
      {/* <ContactUs/> */}
    </>
  )
}
