import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function SwissWatch() {
  useEffect(() => {
    document.title = 'LUNA / SWISS WATCH'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='swiss watch' tags={['landing', '2023', 'figma']} />
      <ProjectContent image={project} />
    </>
  )
}
