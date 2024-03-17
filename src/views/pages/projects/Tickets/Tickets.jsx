import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function Tickets() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS / TICKETS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='tickets' tags={['app', '2023', 'figma / adobe photoshop']} />
      <ProjectContent image={project} />
    </>
  )
}
