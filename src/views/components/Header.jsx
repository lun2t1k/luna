import {useState} from 'react'
import {HashLink} from 'react-router-hash-link'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const [openSettings, setOpenSettings] = useState(false)

  const toggleSettings = () => {
    setOpenSettings(!openSettings)

    if (openSettings === false) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  return (
    <header className='header'>
      <HashLink to='#navigation' className='header-logo'>
        <Logo />
      </HashLink>

      <HashLink to='#footer' className='header-title'>
        about design
      </HashLink>

      <button
        className={`header-settings-btn ${openSettings ? 'active' : ''}`}
        onClick={() => {
          toggleSettings()
        }}
      >
        <svg width='30' height='14' viewBox='0 0 30 14' xmlns='http://www.w3.org/2000/svg' className='burger'>
          <path d='M0 1H30M0 13H30' stroke='#fff' strokeWidth='2' />
        </svg>

        <svg width='23' height='23' viewBox='0 0 23 23' xmlns='http://www.w3.org/2000/svg' className='close'>
          <path d='M1.2132 1L22.4264 22.2132M22.2132 1L1 22.2132' stroke='white' strokeWidth='2' />
        </svg>
      </button>

      <div className={`header-settings ${openSettings ? 'active' : ''}`}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </header>
  )
}
