import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import humaninterfaceguidelines from '../../assets/images/design/humaninterfaceguidelines.png'
import materialdesign from '../../assets/images/design/materialdesign.png'
import curateddesign from '../../assets/images/design/curateddesign.png'
import footerdesign from '../../assets/images/design/footerdesign.png'
import godly from '../../assets/images/design/godly.png'
import darkmodedesign from '../../assets/images/design/darkmodedesign.png'
import mobbin from '../../assets/images/design/mobbin.png'
import landingfolio from '../../assets/images/design/landingfolio.png'
import landbook from '../../assets/images/design/landbook.png'
import cyrillicdesign from '../../assets/images/design/cyrillicdesign.png'
import minimalgallery from '../../assets/images/design/minimalgallery.png'
import siiimple from '../../assets/images/design/siiimple.png'
import designhub from '../../assets/images/design/designhub.png'

const links = [
  {
    title: 'human interface guidelines',
    href: 'https://developer.apple.com/design/',
    image: humaninterfaceguidelines,
    tags: ['apple', 'guidelines']
  },
  {title: 'material design', href: 'https://m3.material.io/', image: materialdesign, tags: ['google', 'guidelines']},
  {title: 'curated design', href: 'https://www.curated.design/', image: curateddesign, tags: ['inspiration']},
  {title: 'footer design', href: 'https://www.footer.design/', image: footerdesign, tags: ['inspiration']},
  {title: 'godly', href: 'https://godly.website/', image: godly, tags: ['inspiration']},
  {title: 'dark mode design', href: 'https://www.darkmodedesign.com/', image: darkmodedesign, tags: ['inspiration']},
  {title: 'mobbin', href: 'https://mobbin.com/browse/ios/apps', image: mobbin, tags: ['inspiration', 'flows']},
  {title: 'landing folio', href: 'https://www.landingfolio.com/', image: landingfolio, tags: ['inspiration', 'templates']},
  {title: 'land book', href: 'https://land-book.com/', image: landbook, tags: ['inspiration', 'templates']},
  {title: 'cyrillic design', href: 'https://archive.cyrillic.design/', image: cyrillicdesign, tags: ['inspiration']},
  {title: 'minimal gallery', href: 'https://minimal.gallery/', image: minimalgallery, tags: ['inspiration']},
  {title: 'siiimple', href: 'https://siiimple.com/', image: siiimple, tags: ['inspiration']},
  {title: 'design hub', href: 'https://pikfree.ru/', image: designhub, tags: ['inspiration', 'templates']}
]

export default function Design() {
  useEffect(() => {
    document.title = 'LUNA / DESIGN'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='design' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
