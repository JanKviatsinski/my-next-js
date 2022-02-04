import star from '../../../public/star.svg'
import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { cards } from './constants'
import { ButtonNormal } from '../../buttons/ButtonNormal/ButtonNormal'
export const OurBenefits = () => {
  return <section className='bg-third'>
    <CommonContainer classes='text-mainT flex-col'>
      <div className='flex mb-11 justify-center'>
        <div className='w-10 h-10 mr-4'>
          <Image src={star} alt='icon simple graphic' />
        </div>
        <p className='text-3xl font-bold'>
          Our Benefits
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center mb-12'>
        {cards.map(card =>
          <div className='bg-alternate text-center py-3 px-4 rounded-md grid grid-cols-2 gap-5 md:grid-cols-1 max-w-sm'
            key={card.text}>
            <div className='w-15 h-15'>
              <Image src={card.img} alt={card.alt} />
            </div>
            <p>
              {card.text}
            </p>
          </div>
        )}
      </div>
      <ButtonNormal classes='self-center' text='Get started' />
    </CommonContainer>
  </section>
}