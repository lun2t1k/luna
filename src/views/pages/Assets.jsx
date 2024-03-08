import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import crate from '../../assets/images/assets/crate.png'
import figcomponents from '../../assets/images/assets/figcomponents.png'
import sketchfab from '../../assets/images/assets/sketchfab.png'

const links = [
  {title: 'crate', href: 'https://my.crate.as/community', image: crate, tags: ['packs', 'textures']},
  {title: 'fig components', href: 'https://www.figcomponents.com/', image: figcomponents, tags: ['templates']},
  {title: 'sketch fab', href: 'https://sketchfab.com/feed', image: sketchfab, tags: ['3d']}
]

export default function Assets() {
  useEffect(() => {
    document.title = 'LUNA / ASSETS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='assets' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
