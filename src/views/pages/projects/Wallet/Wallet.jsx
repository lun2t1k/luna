import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function Wallet() {
  useEffect(() => {
    document.title = 'LUNA / WALLET'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='wallet' tags={['app', '2024', 'figma / adobe photoshop']} />
      <ProjectContent image={project} />
    </>
  )
}
