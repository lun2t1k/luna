/* eslint-disable react/no-unescaped-entities */
import {NavLink} from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='pnf'>
      <h1>404</h1>
      <p>the page you're looking for doesn't exist</p>
      <NavLink to='/'>back to home</NavLink>
    </div>
  )
}
