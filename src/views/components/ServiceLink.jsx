import {Link} from 'react-router-dom'

export default function ServiceLink(props) {
  return (
    <Link to={props.href} target='_blank' rel='noopener noreferrer' className='content-grid__card' data-aos='zoom-in'>
      <div className='image'>
        <img src={props.image} alt='' />
      </div>

      <div className='tags'>
        {props.tags.map((tag, i) => {
          return (
            <span key={`${props.title}-${i}`} className='theme dark text'>
              {tag}
            </span>
          )
        })}
        <span className='theme dark text'>/</span>
      </div>

      <h3 className='theme dark text' data-aos='flip-up' data-aos-delay='200'>
        {props.title}

        <svg xmlns='http://www.w3.org/2000/svg' width='37' height='37' viewBox='0 0 37.71 37.71' className='theme dark svg arrow'>
          <polygon points='1.41 37.71 0 36.29 34.29 2 4.54 2 4.54 0 37.71 0 37.71 33.13 35.71 33.13 35.71 3.41 1.41 37.71' fill='#fff' />
        </svg>
      </h3>
    </Link>
  )
}
