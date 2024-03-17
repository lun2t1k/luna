import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function Fitness() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS / FITNESS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='fitness' tags={['app', '2023', 'figma / adobe photoshop']} />
      <ProjectContent image={project} />
    </>
  )
}
