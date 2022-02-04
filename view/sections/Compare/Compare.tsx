import star from '../../../public/star.svg'
import Image from 'next/image'
import { CommonContainer } from '../../components/CommonContainer/CommonContainer'
import { ButtonNormal } from '../../buttons/ButtonNormal/ButtonNormal'

export const Compare = () => {
  return <section className='bg-third'>
    <CommonContainer classes='text-mainT flex-col'>
      <div className='flex mb-11 justify-center'>
        <div className='w-10 h-10 mr-4'>
          <Image src={star} alt='icon simple graphic' />
        </div>
        <p className='text-3xl font-bold'>
          Compare
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 justify-items-center mb-12'>
      </div>
      <ButtonNormal classes='self-center' text='Get started' />
    </CommonContainer>
  </section>
}