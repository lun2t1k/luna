import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import nounproject from '../../assets/images/icons/nounproject.png'
import svgrepo from '../../assets/images/icons/svgrepo.png'
import icons8 from '../../assets/images/icons/icons8.png'
import flaticon from '../../assets/images/icons/flaticon.png'
import freeicons from '../../assets/images/icons/freeicons.png'
import themeui from '../../assets/images/icons/themeui.png'
import iconfinder from '../../assets/images/icons/iconfinder.png'
import brandlogos from '../../assets/images/icons/brandlogos.png'
import vectorlogozone from '../../assets/images/icons/vectorlogozone.png'

const links = [
  {title: 'the noun project', href: 'https://thenounproject.com/icons/', image: nounproject, tags: ['illustrations']},
  {title: 'svgrepo', href: 'https://www.svgrepo.com/', image: svgrepo, tags: ['icons']},
  {title: 'icons8', href: 'https://icons8.com/', image: icons8, tags: ['ai', 'illustrations']},
  {title: 'flat icon', href: 'https://www.flaticon.com/', image: flaticon, tags: ['icons', 'illustrations']},
  {title: 'free icons', href: 'https://freeicons.io/', image: freeicons, tags: ['icons', 'illustrations']},
  {title: 'themeui', href: 'https://themeui.net/free-icons/', image: themeui, tags: ['icons']},
  {title: 'icon finder', href: 'https://www.iconfinder.com/', image: iconfinder, tags: ['icons', '3d', 'illustrations']},
  {title: 'brand logos', href: 'https://brandlogos.net/', image: brandlogos, tags: ['svg', 'eps']},
  {title: 'vector logo zone', href: 'https://www.vectorlogo.zone/', image: vectorlogozone, tags: ['svg']}
]

export default function Icons() {
  useEffect(() => {
    document.title = 'LUNA / ICONS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='icons' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
