import Link from 'next/link';

export const MainNav = () =>
  <nav className='mr-4 items-center text-xs hidden md:flex'>
    <Link href={'/'}><a className='mr-4'>About</a></Link>
    <Link href={'/'}><a className='mr-4'>Strategies</a></Link>
    <Link href={'/'}><a className='mr-4'>Pricing</a></Link>
    <Link href={'/'}><a className=''>Contact us</a></Link>
  </nav>
