// import Head from "next/head";
// import styles from "@/styles/Home.module.css";
import Logistic from "@/components/Logistic/Logistic";
import Services from "@/components/Services/Services";
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero/Hero'
import DeliveryDetails from '@/components/DeliveryDetails/DeliveryDetails'
import RecentDeliveries from '@/components/RecentDeliveries/RecentDeliveries'
import ContactUs from '@/components/ContactUs/ContactUs'
import Info from '@/components/Info/Info'
import TableBlock from '@/components/Table/TableBlock'
import Customer from '@/components/Customer/Customer'

export default function Home() {
  return (
    <>
      <Head>
        <title>DamlaRus</title>
        <meta name="description" content="Created by snowflake" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DamlaRus" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="DamlaRus – транспортно-логистическая компания. Наша компания специализируется на автотранспортных грузоперевозках в
          города России такие как Москва, Самара, Казань, Пятигорск. Это один из наиболее популярных видов транспортировки
          грузов, используемый для доставки различных товаров на дальние и междугородние расстояния. Мы стараемся предоставить
          сервис на высоком уровне за короткие сроки и самое главное за адекватную и доступную цену от 35 рублей за килограмм.
          Нашим генеральным партнером является один из крупнейших транспортно-логистических компаний Кыргызстана – UBS Transit."
        />
        <meta
          name='DamlaRus, damlorus, damlo, Damlo, DAMLORUS, damlo-rus, Damlo-Rus, DAMLO-RUS, snowflake, SNOWFLAKE, SnowFlake'
          content='DamlaRus – транспортно-логистическая компания. Наша компания специализируется на автотранспортных грузоперевозках в
          города России такие как Москва, Самара, Казань, Пятигорск. Это один из наиболее популярных видов транспортировки
          грузов, используемый для доставки различных товаров на дальние и междугородние расстояния. Мы стараемся предоставить
          сервис на высоком уровне за короткие сроки и самое главное за адекватную и доступную цену от 35 рублей за килограмм.
          Нашим генеральным партнером является один из крупнейших транспортно-логистических компаний Кыргызстана – UBS Transit.
          Основная цель нашей компании — это своевременное и качественное решение задач клиентов, связанных с организацией международных перевозок
          автомобильным транспортом.  Наличие собственного автопарка, внедрение современных решений для автоматизации логистических процессов, GPS мониторинг
          позволяют нам полностью контролировать процесс перевозок , значительно снизить риски, сохраняя высокое качество услуг.
          В нашей компании каждый клиент найдет для себя и своей ситуации уникальный подход и грамотные решения, которые позволят с минимальными совокупными
          затратами эффективно выполнить требуемые операции.
          Какие услуги мы предоставляем:

          1. Перевозка негабаритных – эта одежда, обувь, ткани, из  тяжеловесных грузов – автозапчасти, строительные материалы и другие.
          2. Доставка грузов в города и регионы России, включая удаленные и труднодоступные районы быстро, доступно и надежно.
          3. Организация перевозок на складах и терминалах.
          4. Оформление необходимых документов для перевозки грузов (например, таможенных деклараций и разрешений на перевозку опасных грузов).
          5. Упаковка и погрузка грузов.
          6. Организация срочных и экспресс-доставок.
          7. Консультации по выбору наилучшего маршрута и способа перевозки грузов.
          8. отслеживание грузов в режиме реального времени.'
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Hero />
      <Info />
      <DeliveryDetails />
      <Services />
      <TableBlock />
      <Logistic />
      <RecentDeliveries />
      <Customer />
      <ContactUs />
    </>
  );
}
