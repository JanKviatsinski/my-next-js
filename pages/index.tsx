import Head from 'next/head'
import { Header } from '../view/components/Header/Header'
import { GetStarted } from '../view/sections/GetStarted/GetStarted'
import { OurBenefits } from '../view/sections/OurBenefits/OurBenefits'
import { OurBots } from '../view/sections/OurBots/OurBots'

export default function Home () {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;600;700;900&display=swap" rel="stylesheet" />
        <title>OurBots</title>

        <meta name="description" content="OurBots" />

        <meta name="keywords" content="OurBots" />

        <meta name="Author" content="OurBots" />
        <meta name="Address" content="yan5751839@gmail.com" />

        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="OurBots" />
        <meta property="og:description" content="OurBots" />
        <meta property="og:image"
          content="https://my-next-js-ten.vercel.app/graphic33.jpg" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="300" />
        <meta property="og:url" content="https://my-next-js-ten.vercel.app/ " />
        <meta property="og:site_name" content="OurBots" />
      </Head>
      <Header />
      <OurBots />
      <OurBenefits />
      <GetStarted />
    </>
  )
}
