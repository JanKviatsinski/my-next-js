import Link from 'next/link'
import { ButtonBoorger } from '../../buttons/ButtonBoorger/ButtonBoorger'
import { ButtonOutliner } from '../../buttons/ButtonOutliner/ButtonOutliner'
import { MainNav } from '../../elements/MainNav/MainNav'

export const Header = () =>
  <div className='bg-main text-secondT'>
    <div className='container py-6 flex justify-between'>
      <Link href={'/'}>
        <a className='self-center text-xl md:text-sm font-bold mr-4'>TradeHUB</a>
      </Link>
      <MainNav />
      <div className='hidden md:block'>
        <Link href={'/'}><a className='mr-4 text-xs'>Sign In</a></Link>
        <ButtonOutliner text='Get Started' />
      </div>
      <ButtonBoorger />
    </div>
  </div>