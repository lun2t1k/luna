import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function SmartHome() {
  useEffect(() => {
    document.title = 'LUNA / SMART HOME'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='smart home' tags={['app', '2023', 'figma']} />
      <ProjectContent image={project} />
    </>
  )
}
