import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function BusinessCard() {
  useEffect(() => {
    document.title = 'LUNA / 3D ARTIST BUSINESS CARD'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='3d artist business card' tags={['landing', '2023', 'figma']} />
      <ProjectContent image={project} />
    </>
  )
}
