import {Link, NavLink} from 'react-router-dom'
import ContentLink from './ContentLink'

export default function ContentGrid(props) {
  if (props.wideGrid) {
    return (
      <div className='content'>
        {props.links.map((link, i) => {
          return (
            <NavLink
              key={`link-${i}`}
              to={link.href}
              className={`content-card ${props.wideGrid ? 'content-card--wide' : ''}`}
              data-aos='zoom-in'
              data-aos-offset='100'
            >
              <ContentLink image={link.image} tags={link.tags} title={link.title} />
            </NavLink>
          )
        })}
      </div>
    )
  } else {
    return (
      <div className='content'>
        {props.links.map((link, i) => {
          return (
            <Link
              key={`link-${i}`}
              to={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='content-card'
              data-aos='zoom-in'
              data-aos-offset='100'
            >
              <ContentLink image={link.image} tags={link.tags} title={link.title} />
            </Link>
          )
        })}
      </div>
    )
  }
}
