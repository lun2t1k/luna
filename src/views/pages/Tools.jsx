import {useEffect} from 'react'
import ServiceLink from '../components/ServiceLink'

import jitter from '../../assets/images/tools/jitter.png'
import bezi from '../../assets/images/tools/bezi.png'
import endlessTools from '../../assets/images/tools/endless-tools.png'
import spline from '../../assets/images/tools/spline.png'
import borrowlab from '../../assets/images/tools/borrowlab.png'
import morflaxStudio from '../../assets/images/tools/morflax-studio.png'
import shots from '../../assets/images/tools/shots.png'
import mockRocket from '../../assets/images/tools/mockrocket.png'
import pixcap from '../../assets/images/tools/pixcap.png'

const links = [
  {title: 'jitter', href: 'https://jitter.video/files/', image: jitter, tags: ['motion design']},
  {title: 'bezi', href: 'https://www.bezi.com/recent', image: bezi, tags: ['3d']},
  {title: 'endless tools', href: 'https://beta.endlesstools.io/', image: endlessTools, tags: ['3d']},
  {title: 'spline', href: 'https://app.spline.design/home', image: spline, tags: ['3d', 'motion design']},
  {title: 'borrowlab', href: 'https://www.burrowlab.com/demo', image: borrowlab, tags: ['fonts']},
  {title: 'morflax studio', href: 'https://studio.morflax.com/', image: morflaxStudio, tags: ['3d']},
  {title: 'shots', href: 'https://www.shots.so/', image: shots, tags: ['posts', 'socials']},
  {title: 'mock rocket', href: 'https://app.mockrocket.io/', image: mockRocket, tags: ['3d', 'mockup', 'animation']},
  {title: 'pixcap', href: 'https://pixcap.com/explore', image: pixcap, tags: ['3d', 'posts', 'socials']}
]

export default function Tools() {
  useEffect(() => {
    document.title = 'LUNA / TOOLS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <div className='title'>
        <div className='title-wrap'>
          <h1>tools</h1>
          <div className='title-count'>({links.length})</div>
        </div>
      </div>

      <div className='content'>
        <div className='content-grid'>
          {links.map((link, i) => {
            return <ServiceLink key={`link-${i}`} href={link.href} image={link.image} tags={link.tags} title={link.title} />
          })}
        </div>
      </div>
    </>
  )
}
