import trading from '../../../public/trading.svg'
import settings from '../../../public/settings.svg'
import graphic2 from '../../../public/graphic2.svg'
import many from '../../../public/many.svg'
import time from '../../../public/time.svg'
import protection from '../../../public/protection.svg'

type TypeCards = {
  img: string
  text: string
  alt: string
}[]

export const cards: TypeCards = [
  {
    img: trading,
    text: 'Trading with buy and sell',
    alt: 'trading'
  },
  {
    img: settings,
    text: 'Ready-made settings for bots',
    alt: 'settings'
  },
  {
    img: graphic2,
    text: 'Flexible bot configuration',
    alt: 'graphic2'
  },
  {
    img: many,
    text: 'Start trading as low as $15',
    alt: 'many'
  },
  {
    img: time,
    text: 'Setting up a bot in 5 minutes',
    alt: 'time'
  },
  {
    img: protection,
    text: 'Cryptocurrency on exchange',
    alt: 'protection'
  },
]