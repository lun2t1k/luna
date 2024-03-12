import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import wallet from './projects/Wallet/assets/cover.png'
import fooddelivery from './projects/FoodDelivery/assets/cover.png'
import tickets from './projects/Tickets/assets/cover.png'
import fitness from './projects/Fitness/assets/cover.png'
import businesscard from './projects/BusinessCard/assets/cover.png'
import cryptocurrency from './projects/Cryptocurrency/assets/cover.png'
import smarthome from './projects/SmartHome/assets/cover.png'
import swisswatch from './projects/SwissWatch/assets/cover.png'
import freshpress from './projects/FreshPress/assets/cover.png'

const links = [
  {title: 'wallet', href: '/projects/wallet', image: wallet, tags: ['app']},
  {title: 'food delivery', href: '/projects/food-delivery', image: fooddelivery, tags: ['app']},
  {title: 'tickets', href: '/projects/tickets', image: tickets, tags: ['app']},
  {title: 'fitness', href: '/projects/fitness', image: fitness, tags: ['app']},
  {title: 'business card', href: '/projects/business-card', image: businesscard, tags: ['landing']},
  {title: 'crypto currency courses', href: '/projects/crypto-currency-courses', image: cryptocurrency, tags: ['landing']},
  {title: 'smart home', href: '/projects/smart-home', image: smarthome, tags: ['app']},
  {title: 'swiss watch', href: '/projects/swiss-watch', image: swisswatch, tags: ['landing']},
  {title: 'fresh&press', href: '/projects/fresh-and-press', image: freshpress, tags: ['landing']}
]

export default function Projects() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='projects' number={links.length} />
      <ContentGrid links={links} wideGrid={true} />
    </>
  )
}
