import {useEffect} from 'react'
import ContentTitle from '../components/ContentTitle'
import ContentGrid from '../components/ContentGrid'

import endlesstools from '../../assets/images/tools/endlesstools.png'
import mockrocket from '../../assets/images/tools/mockrocket.png'
import shots from '../../assets/images/tools/shots.png'
import jitter from '../../assets/images/tools/jitter.png'
import bezi from '../../assets/images/tools/bezi.png'
import spline from '../../assets/images/tools/spline.png'
import burrowlab from '../../assets/images/tools/burrowlab.png'
import figpea from '../../assets/images/tools/figpea.png'

const links = [
  {title: 'endless tools', href: 'https://beta.endlesstools.io/', image: endlesstools, tags: ['3d']},
  {title: 'mock rocket', href: 'https://app.mockrocket.io/', image: mockrocket, tags: ['mockups', 'animation']},
  {title: 'shots', href: 'https://www.shots.so/', image: shots, tags: ['mockups']},
  {title: 'jitter', href: 'https://jitter.video/files/', image: jitter, tags: ['animations']},
  {title: 'bezi', href: 'https://www.bezi.com/recent', image: bezi, tags: ['3d', 'team']},
  {title: 'spline', href: 'https://app.spline.design/home', image: spline, tags: ['3d', 'motion design']},
  {title: 'burrow lab', href: 'https://www.burrowlab.com/demo', image: burrowlab, tags: ['fonts', 'png']},
  {title: 'figpea', href: 'https://figpea.com/', image: figpea, tags: ['psd', 'ai', 'xd']}
]

export default function Tools() {
  useEffect(() => {
    document.title = 'LUNA / TOOLS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ContentTitle title='tools' number={links.length} />
      <ContentGrid links={links} />
    </>
  )
}
