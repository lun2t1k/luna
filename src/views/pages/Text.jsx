import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import typescale from '../../assets/images/text/typescale.png'
import register from '../../assets/images/text/register.png'
import spacetype from '../../assets/images/text/spacetype.png'

const links = [
  {title: 'type scale', href: 'https://typescale.com/', image: typescale, tags: ['tools']},
  {title: 'register converter', href: 'https://www.artlebedev.ru/case/', image: register, tags: ['tools']},
  {title: 'space type generator', href: 'https://spacetypegenerator.com/', image: spacetype, tags: ['3d', 'gif']}
]

export default function Text() {
  useEffect(() => {
    document.title = 'LUNA / TEXT'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='text' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
