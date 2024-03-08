/* eslint-disable react/no-unescaped-entities */
import {useEffect} from 'react'
import {NavLink} from 'react-router-dom'

export default function PageNotFound() {
  useEffect(() => {
    document.title = 'LUNA / PAGE NOT FOUND'
    window.scrollTo({top: 0, behavior: 'instant'})
  }, [])

  return (
    <div className='pnf'>
      <h1>404</h1>
      <p>the page you're looking for doesn't exist</p>
      <NavLink to='/'>back to home</NavLink>
    </div>
  )
}
