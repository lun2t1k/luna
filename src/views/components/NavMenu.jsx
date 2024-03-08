import {NavLink} from 'react-router-dom'

export default function NavMenu() {
  const menuLinks = [
    {title: 'home', href: '/'},
    {title: 'projects', href: '/projects'},
    {title: 'about', href: '/about'},
    {title: 'fonts', href: '/fonts'},
    {title: 'text', href: '/text'},
    {title: 'images', href: '/images'},
    {title: 'icons', href: '/icons'},
    {title: 'colors', href: '/colors'},
    {title: 'tools', href: '/tools'},
    {title: 'ai', href: '/ai'},
    {title: 'mockups', href: '/mockups'},
    {title: 'design', href: '/design'},
    {title: 'assets', href: '/assets'},
    {title: 'games', href: '/games'}
  ]

  return (
    <nav className='nav' id='menu'>
      <ul>
        {menuLinks.map((link, i) => {
          return (
            <li key={`menuLinks-${i}`} className='nav-link-border' data-aos='fade-left'>
              <NavLink to={link.href}>
                <div className='slash'>/</div>

                {link.title}

                <svg width='99' height='99' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 99.98 99.98' className='arrow'>
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
