import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function Cryptocurrency() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS / CRYPTO CURRENCY COURSES'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='crypto currency courses' tags={['landing', '2023', 'figma']} />
      <ProjectContent image={project} />
    </>
  )
}
