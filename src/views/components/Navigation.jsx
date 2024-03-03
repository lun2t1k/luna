import {NavLink} from 'react-router-dom'

export default function Navigation() {
  const menuLinks = [
    {'title': 'home', 'href': '/'},
    {'title': 'projects', 'href': '#'},
    {'title': 'about me', 'href': '#'},
    {'title': 'design', 'href': '#'},
    {'title': 'fonts', 'href': '#'},
    {'title': 'colors', 'href': '#'},
    {'title': 'tools', 'href': '/tools'},
    {'title': 'images', 'href': '#'},
    {'title': 'icons', 'href': '#'},
    {'title': 'mockups', 'href': '#'},
    {'title': 'ai', 'href': '#'},
    {'title': 'assets', 'href': '#'}
  ]

  return (
    <div className="navigation" id="navigation">
      <div className="container">
        <nav className="nav">
          <ul>
            {menuLinks.map((link, i) => {
              return (
                <li key={`menuLinks-${i}`} className="theme dark navigation-link-border">
                  <NavLink to={link.href} className="theme dark text">
                    <div className="theme dark text slash">/</div>
                    {link.title}
                    <svg width="99" height="99" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.98 99.98" className="theme dark svg arrow">
                      <polygon fill="#fff" points="99.98 99.98 12.58 99.98 12.58 92.98 88.02 92.98 0 4.95 4.95 0 92.98 88.02 92.98 12.47 99.98 12.47 99.98 99.98" />
                    </svg>
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}