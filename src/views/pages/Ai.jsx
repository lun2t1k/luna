import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import perchance from '../../assets/images/ai/perchance.png'
import recraft from '../../assets/images/ai/recraft.png'
import fusionbrain from '../../assets/images/ai/fusionbrain.png'
import fakeperson from '../../assets/images/ai/fakeperson.png'
import boredhumans from '../../assets/images/ai/boredhumans.png'
import aicreate from '../../assets/images/ai/aicreate.png'
import lumalabs from '../../assets/images/ai/lumalabs.png'
import imagefx from '../../assets/images/ai/imagefx.png'
import vizcom from '../../assets/images/ai/vizcom.png'

const links = [
  {title: 'perchance', href: 'https://perchance.org/ai-icon-generator', image: perchance, tags: ['images', 'icons']},
  {title: 'recraft', href: 'https://app.recraft.ai/community', image: recraft, tags: ['images']},
  {title: 'fusion brain', href: 'https://fusionbrain.ai/editor/', image: fusionbrain, tags: ['images', 'video']},
  {title: 'fake person generator', href: 'https://fakepersongenerator.com/Index/generate', image: fakeperson, tags: ['data']},
  {title: 'bored humans', href: 'https://boredhumans.com/', image: boredhumans, tags: ['library']},
  {title: 'ai create', href: 'https://aicreate.com/', image: aicreate, tags: ['design', 'typography', 'code']},
  {title: 'luma labs', href: 'https://lumalabs.ai/genie?view=create', image: lumalabs, tags: ['3d', 'scenes']},
  {title: 'google ai', href: 'https://aitestkitchen.withgoogle.com', image: imagefx, tags: ['images', 'music', 'typography']},
  {title: 'vizcom', href: 'https://app.vizcom.ai/files/d297656b-54eb-41dd-a336-c568778ef35c/recent', image: vizcom, tags: ['images', 'drawing']}
]

export default function Ai() {
  useEffect(() => {
    document.title = 'LUNA / AI'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='ai' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
