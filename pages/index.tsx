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
        <title>Апалон Каликстович Великий</title>
        {/* пишем не более 140 символов. */}
        <meta name="description" content="Апалон Каликстович Великий - как стать великим человеком" />
        {/* ѕишем не более 20ти слов.  лючевые фразы раздел€ем зап€той. */}
        <meta name="keywords" content="Апалон Каликстович Великий, как стать великим человеком, Апалон, Каликстович, Великий" />

        <meta name="Author" content="Апалон Каликстович Великий" />
        <meta name="Address" content="yan5751839@gmail.com" />

        {/* <!-- локализаци€ сайта, дл€ русско€зычного сайта ru_RU --> */}
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Апалон Каликстович Великий" />
        <meta property="og:description" content="Апалон Каликстович Великий, как стать великим человеком, Апалон, Каликстович, Великий" />
        <meta property="og:image" content="https://my-next-js-ten.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgraphic.5b89b59c.svg&w=1200&q=75" />
        <meta property="og:url" content="https://my-next-js-ten.vercel.app/ " />
        <meta property="og:site_name" content="Апалон Каликстович Великий" />
      </Head>
      <Header />
      <OurBots />
      <OurBenefits />
      <GetStarted />
    </>
  )
}
