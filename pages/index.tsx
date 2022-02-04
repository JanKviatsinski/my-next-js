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
      </Head>
      <Header />
      <OurBots />
      <OurBenefits />
      <GetStarted />
    </>
  )
}
