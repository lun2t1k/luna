import {Fragment} from 'react'
import {Link} from 'react-router-dom'

export default function ContentLink(props) {
  return (
    <Link to={props.href} target='_blank' rel='noopener noreferrer' className='content-card' data-aos='zoom-in' data-aos-offset='100'>
      <div className='content-card__image'>
        <img src={props.image} alt='' loading='lazy' />
      </div>

      <div className='content-card__tags'>
        {props.tags.map((tag, i) => {
          return (
            <Fragment key={`${props.title}-${i}`}>
              <span>{tag}</span>
              <span>/</span>
            </Fragment>
          )
        })}
      </div>

      <h3 className='content-card__title' data-aos='flip-up' data-aos-delay='200'>
        {props.title}

        <svg xmlns='http://www.w3.org/2000/svg' width='37' height='37' viewBox='0 0 37.71 37.71' className='arrow'>
          <polygon points='1.41 37.71 0 36.29 34.29 2 4.54 2 4.54 0 37.71 0 37.71 33.13 35.71 33.13 35.71 3.41 1.41 37.71' fill='#fff' />
        </svg>
      </h3>
    </Link>
  )
}
