import graphic from '../../../public/graphic.svg'
import { ButtonOutliner } from '../../buttons/ButtonOutliner/ButtonOutliner'
import Image from 'next/image'

export const Grid = () =>
  <div className='
grid
grid-cols-1
gap-4
md:grid-cols-2
mb-12
'>
    <div className='
  max-w-sm
  justify-self-center
  shadow-main
  rounded-md
  md:order-last'>
      <Image src={graphic} alt='icon simple graphic' />
    </div>
    <div className='text-center md:text-left'>
      <p className='
    self-center
    text-3xl
    font-bold
    mb-3'>
        Grid
      </p>
      <p className='mb-5'>
        Trading strategy using a grid of
        orders, placing orders during the
        sideways movement of the market
        to earn on volatility
      </p>
      <ButtonOutliner text='Try this strategy' />
    </div>
  </div>