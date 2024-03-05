import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import monkeytype from '../../assets/images/games/monkeytype.png'
import bezier from '../../assets/images/games/bezier.png'

const links = [
  {title: 'monkey type', href: 'https://monkeytype.com/', image: monkeytype, tags: ['type speed']},
  {title: 'the bezier game', href: 'https://bezier.method.ac/', image: bezier, tags: ['pen tool']}
]

export default function Games() {
  useEffect(() => {
    document.title = 'LUNA / GAMES'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='games' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
