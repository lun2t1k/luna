import {useEffect} from 'react'
import ProjectTitle from '../../../components/ProjectTitle'
import ProjectContent from '../../../components/ProjectContent'

import project from './assets/project.png'

export default function FoodDelivery() {
  useEffect(() => {
    document.title = 'LUNA / PROJECTS / FOOD DELIVERY'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <>
      <ProjectTitle title='food delivery' tags={['app', '2023', 'figma / adobe photoshop']} />
      <ProjectContent image={project} />
    </>
  )
}
