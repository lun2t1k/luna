import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import tineye from '../../assets/images/images/tineye.png'
import unsplash from '../../assets/images/images/unsplash.png'
import freepik from '../../assets/images/images/freepik.png'
import vectorizer from '../../assets/images/images/vectorizer.png'
import pngwing from '../../assets/images/images/pngwing.png'
import flickr from '../../assets/images/images/flickr.png'
import imagewithai from '../../assets/images/images/imagewithai.png'
import avc from '../../assets/images/images/avc.png'
import pngegg from '../../assets/images/images/pngegg.png'

const links = [
  {title: 'tineye', href: 'https://labs.tineye.com/multicolr/', image: tineye, tags: ['color search']},
  {title: 'unsplash', href: 'https://unsplash.com/', image: unsplash, tags: ['gallery', 'stock']},
  {title: 'freepik', href: 'https://www.freepik.com/', image: freepik, tags: ['gallery', 'stock', 'psd']},
  {title: 'vectorizer', href: 'https://www.vectorizer.io/', image: vectorizer, tags: ['vector', 'tools']},
  {title: 'pngwing', href: 'https://www.pngwing.com/', image: pngwing, tags: ['png']},
  {title: 'flickr', href: 'https://www.flickr.com/', image: flickr, tags: ['gallery']},
  {title: 'imagewith.ai', href: 'https://www.imagewith.ai/', image: imagewithai, tags: ['ai', 'tools']},
  {title: 'avc.ai', href: 'https://avc.ai/remove-objects/', image: avc, tags: ['ai', 'tools']},
  {title: 'pngegg', href: 'https://www.pngegg.com/ru', image: pngegg, tags: ['png']}
]

export default function Images() {
  useEffect(() => {
    document.title = 'LUNA / IMAGES'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='images' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
