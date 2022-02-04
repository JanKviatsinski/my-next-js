import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { cards } from './constats'
import phone from '../../../public/phone.svg'
import Link from 'next/link'

export const GetStarted = () =>
  <section className='bg-second'>
    <CommonContainer classes='text-mainT flex-col'>
      <div className='mb-11 text-center'>
        <p className='text-3xl font-bold mb-5'>
          Our Benefits
        </p>
        <p className='text-descriptionT'>
          Start earning with our
          bots in 4 simple steps
        </p>
      </div>
      <div className='flex'>
        <div className='hidden md:flex flex-1 relative mr-3'>
          <Image src={phone} alt='phone' layout='fill' />
        </div>
        <div className='w-full grid grid-cols-1 gap-4 flex-1 justify-items-center md:justify-items-start'>
          {cards.map((card, i) =>
            <div className='bg-alternate py-3 px-4 rounded-md max-w-sm shadow-main w-full md:bg-inherit md:shadow-none md:px-0 md:py-0 gap-4'
              key={card.text}>
              <p className='font-bold text-lg text-descriptionT mb-1'>
                {`0${++i}`}
              </p>
              <p className='mb-1 font-bold text-xl'>
                {card.title}
              </p>
              <p className='text-descriptionT'>
                {card.text}
              </p>
            </div>
          )}
          <div className='relative before:content-"" before:w-full before:h-px before:bg-mark before:top-0 before:left-0 before:absolute hidden md:block w-full pt-3 mb-4 last:mb-0'>
            <p className='text-xl'>Ready to get started?</p>
            <Link href={'/'}><a className='text-linkT'>Create your account</a></Link>
          </div>
        </div>
      </div>
    </CommonContainer>
  </section>