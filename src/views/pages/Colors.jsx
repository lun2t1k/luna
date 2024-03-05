import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import colorspectrum from '../../assets/images/colors/colorspectrum.png'
import picular from '../../assets/images/colors/picular.png'
import colorhunt from '../../assets/images/colors/colorhunt.png'
import copypalette from '../../assets/images/colors/copypalette.png'
import colorpalettegenerator from '../../assets/images/colors/colorpalettegenerator.png'
import adobecolor from '../../assets/images/colors/adobecolor.png'
import coolors from '../../assets/images/colors/coolors.png'
import incolorbalance from '../../assets/images/colors/incolorbalance.png'
import colorscheme from '../../assets/images/colors/colorscheme.png'
import colorhexa from '../../assets/images/colors/colorhexa.png'
import realtimecolors from '../../assets/images/colors/realtimecolors.png'

const links = [
  {title: 'color spectrum', href: 'https://colorspectrum.design/generator.html', image: colorspectrum, tags: ['generator']},
  {title: 'picular', href: 'https://picular.co/', image: picular, tags: ['search']},
  {title: 'color hunt', href: 'https://colorhunt.co/', image: colorhunt, tags: ['palettes']},
  {title: 'copy palette', href: 'https://copypalette.app/', image: copypalette, tags: ['palettes']},
  {title: 'color palette generator', href: 'https://mybrandnewlogo.com/color-palette-generator', image: colorpalettegenerator, tags: ['palettes', 'generator']},
  {title: 'adobe color', href: 'https://color.adobe.com/ru/create/color-wheel', image: adobecolor, tags: ['palettes']},
  {title: 'coolors', href: 'https://coolors.co/', image: coolors, tags: ['palettes', 'generator']},
  {title: 'in color balance', href: 'https://color.romanuke.com/', image: incolorbalance, tags: ['palettes']},
  {title: 'color scheme', href: 'https://colorscheme.ru/', image: colorscheme, tags: ['palettes', 'tools']},
  {title: 'color hexa', href: 'https://www.colorhexa.com/', image: colorhexa, tags: ['palettes', 'information']},
  {title: 'real time colors', href: 'https://www.realtimecolors.com/?colors=050316-fbfbfe-2f27ce-ff00f2-1a13e6&fonts=Poppins-Poppins', image: realtimecolors, tags: ['palettes']},
]

export default function Colors() {
  useEffect(() => {
    document.title = 'LUNA / COLORS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='colors' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
