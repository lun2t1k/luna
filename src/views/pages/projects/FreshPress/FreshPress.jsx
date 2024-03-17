import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function FreshPress() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS / FRESH&PRESS'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='fresh&press' tags={['landing', '2023', 'figma / webflow']} />
      <ProjectContent image={project} />
    </>
  )
}
