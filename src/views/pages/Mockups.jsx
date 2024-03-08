import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import mockupworld from '../../assets/images/mockups/mockupworld.png'
import freebiesupply from '../../assets/images/mockups/freebiesupply.png'

const links = [
  {title: 'mockup world', href: 'https://www.mockupworld.co/', image: mockupworld, tags: ['devices', 'food', 'fashion']},
  {title: 'freebie supply', href: 'https://freebiesupply.com/free-psd-mockups/', image: freebiesupply, tags: ['devices', 'fashion']}
]

export default function Mockups() {
  useEffect(() => {
    document.title = 'LUNA / MOCKUPS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='mockups' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
