import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function Skepti() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS / SKEPTI'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='skepti – online shop' tags={['app', '2023', 'figma / adobe photoshop / ai']} />
      <ProjectContent image={project} />
    </>
  )
}
