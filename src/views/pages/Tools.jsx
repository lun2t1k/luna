import {useEffect} from 'react'
import Link from '../components/Link'

const links = [ 
  {'title': 'jitter', 'href': 'https://jitter.video/files/', 'image': 'src/assets/img/tools/jitter.png', 'tags': ['motion design']},
  {'title': 'bezi', 'href': 'https://www.bezi.com/recent', 'image': 'src/assets/img/tools/bezi.png', 'tags': ['3d']},
  {'title': 'endless <br> tools', 'href': 'https://beta.endlesstools.io/', 'image': 'src/assets/img/tools/endless-tools.png', 'tags': ['3d']},
  {'title': 'spline', 'href': 'https://app.spline.design/home', 'image': 'src/assets/img/tools/spline.png', 'tags': ['3d', '/', 'motion design']},
  {'title': 'borrowlab', 'href': 'https://www.burrowlab.com/demo', 'image': 'src/assets/img/tools/borrowlab.png', 'tags': ['fonts']},
  {'title': 'morflax <br> studio', 'href': 'https://studio.morflax.com/', 'image': 'src/assets/img/tools/morflax-studio.png', 'tags': ['3d']},
  {'title': 'shots', 'href': 'https://www.shots.so/', 'image': 'src/assets/img/tools/shots.png', 'tags': ['posts', '/', 'socials']},
  {'title': 'mock <br> rocket', 'href': 'https://app.mockrocket.io/', 'image': 'src/assets/img/tools/mockrocket.png', 'tags': ['3d', '/', 'mockup', '/', 'animation']},
  {'title': 'pixcap', 'href': 'https://pixcap.com/explore', 'image': 'src/assets/img/tools/pixcap.png', 'tags': ['3d', '/', 'posts', '/', 'socials']}
]

export default function Tools() {
  useEffect(() => {
    document.title = 'LUNA / TOOLS'
    // window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <div className="title">
        <div className="container">
          <div className="title-wrap">
            <h1 className="theme dark text">tools</h1>
            <div className="theme dark text title-count">({links.length})</div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="container">
          <div className="content-grid">
            {links.map((link, i) => {
              return <Link key={`link-${i}`} href={link.href} image={link.image} tags={link.tags} title={link.title} />
            })}
          </div>
        </div>
      </div>
    </>
  )
}


