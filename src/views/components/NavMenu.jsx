import {NavLink} from 'react-router-dom'

export default function NavMenu() {
  const menuLinks = [
    {title: 'home', href: '/'},
    {title: 'projects', href: '/projects'},
    {title: 'about', href: '/about'},
    {title: 'design', href: '/design'},
    {title: 'fonts', href: '/fonts'},
    {title: 'colors', href: '/colors'},
    {title: 'tools', href: '/tools'},
    {title: 'images', href: '/images'},
    {title: 'icons', href: '/icons'},
    {title: 'mockups', href: '/mockups'},
    {title: 'ai', href: '/ai'},
    {title: 'assets', href: '/assets'}
  ]

  return (
    <nav className='nav' id='navigation'>
      <ul>
        {menuLinks.map((link, i) => {
          return (
            <li key={`menuLinks-${i}`} className='theme dark nav-link-border' data-aos='fade-left'>
              <NavLink to={link.href} className='theme dark text'>
                <div className='theme dark text slash'>/</div>

                {link.title}

                <svg width='99' height='99' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 99.98 99.98' className='theme dark svg arrow'>
                  <polygon
                    fill='#fff'
                    points='99.98 99.98 12.58 99.98 12.58 92.98 88.02 92.98 0 4.95 4.95 0 92.98 88.02 92.98 12.47 99.98 12.47 99.98 99.98'
                  />
                </svg>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
