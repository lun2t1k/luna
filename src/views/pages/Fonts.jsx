import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import freefaces from '../../assets/images/fonts/freefaces.png'
import fontjoy from '../../assets/images/fonts/fontjoy.png'
import abstractfonts from '../../assets/images/fonts/abstractfonts.png'
import myskotom from '../../assets/images/fonts/myskotom.png'
import googlefonts from '../../assets/images/fonts/googlefonts.png'
import webfonts from '../../assets/images/fonts/webfonts.png'
import fontsonline from '../../assets/images/fonts/fontsonline.png'
import fontesk from '../../assets/images/fonts/fontesk.png'
import fonts1001 from '../../assets/images/fonts/1001fonts.png'
import cufon from '../../assets/images/fonts/cufon.png'
import ofont from '../../assets/images/fonts/ofont.png'
import azfonts from '../../assets/images/fonts/azfonts.png'
import fontsquirrel from '../../assets/images/fonts/fontsquirrel.png'

const links = [
  {title: 'free faces', href: 'https://www.freefaces.gallery/', image: freefaces, tags: ['gallery']},
  {title: 'fontjoy', href: 'https://fontjoy.com/', image: fontjoy, tags: ['tools', 'font pairs']},
  {title: 'abstract fonts', href: 'https://www.abstractfonts.com/', image: abstractfonts, tags: ['library']},
  {title: 'my skotom', href: 'https://myskotom.ru/?ysclid=lh81jdf4nn704906741', image: myskotom, tags: ['library']},
  {title: 'google fonts', href: 'https://fonts.google.com/', image: googlefonts, tags: ['library']},
  {title: 'web fonts', href: 'https://webfonts.pro/', image: webfonts, tags: ['library']},
  {title: 'fonts online', href: 'https://fonts-online.ru/', image: fontsonline, tags: ['library']},
  {title: 'fontesk', href: 'https://fontesk.com/license/free-for-commercial-use/', image: fontesk, tags: ['gallery']},
  {title: '1001 fonts', href: 'https://www.1001fonts.com/', image: fonts1001, tags: ['library']},
  {title: 'cufon fonts', href: 'https://www.cufonfonts.com/', image: cufon, tags: ['library']},
  {title: 'ofont', href: 'https://ofont.ru/', image: ofont, tags: ['library']},
  {title: 'azfonts', href: 'https://ru.azfonts.net/fonts/free', image: azfonts, tags: ['library']},
  {title: 'font squirrel', href: 'https://www.fontsquirrel.com/', image: fontsquirrel, tags: ['library', 'ai search']}
]

export default function Fonts() {
  useEffect(() => {
    document.title = 'LUNA / FONTS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='fonts' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
