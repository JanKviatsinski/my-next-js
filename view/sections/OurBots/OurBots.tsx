import sectionImg from '../../../public/1.svg'
import Image from 'next/image'
import { DCA } from './ DCA'
import { Grid } from './Grid'
import { ShortSelling } from './ShortSelling'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'

export const OurBots = () =>
  <section className='bg-second'>
    <CommonContainer classes='text-mainT flex-col'>
      <div className='self-center flex mb-11'>
        <div className='w-10 h-10 mr-4'>
          <Image src={sectionImg} alt='icon simple graphic' />
        </div>
        <p className='self-center text-3xl font-bold'>
          Our Bots
        </p>
      </div>
      <DCA />
      <Grid />
      <ShortSelling />
    </CommonContainer>
  </section>