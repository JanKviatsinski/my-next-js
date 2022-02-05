import graphic from '../../../public/graphic33.jpg'
import { ButtonOutliner } from '../../buttons/ButtonOutliner/ButtonOutliner'
import Image from 'next/image'

export const DCA = () =>
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
  rounded-md'>
      <Image src={graphic} alt='icon simple graphic' />
    </div>
    <div className='text-center md:text-left'>
      <p className='
    self-center
    text-3xl
    font-bold
    mb-3'>
        DCA
      </p>
      <p className='mb-5'>
        A strategy to minimize risk, you
        average your position by buying a
        coin over a long period of time and
        get a profit even with a slight rise
      </p>
      <ButtonOutliner text='Try this strategy' />
    </div>
  </div>