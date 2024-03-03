import {useCallback, useEffect, useState} from 'react'

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'system')

  const element = document.documentElement

  const metaThemeColor = document.querySelector('meta[name="theme-color"]')
  const setMetaThemeColor = useCallback(
    theme => {
      if (theme === 'dark') {
        metaThemeColor.setAttribute('content', '#000000')
      } else {
        metaThemeColor.setAttribute('content', '#ffffff')
      }
    },
    [metaThemeColor]
  )

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

  const darkOn = useCallback(() => {
    element.classList.add('dark')
    element.classList.remove('light')
  }, [element.classList])

  const lightOn = useCallback(() => {
    element.classList.add('light')
    element.classList.remove('dark')
  }, [element.classList])

  const onWindowMatch = useCallback(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      darkOn()
      setMetaThemeColor('dark')
    } else {
      lightOn()
      setMetaThemeColor('light')
    }
  }, [darkOn, darkQuery.matches, lightOn, setMetaThemeColor])

  onWindowMatch()

  useEffect(() => {
    switch (theme) {
      case 'light':
        lightOn()
        setMetaThemeColor('light')
        localStorage.setItem('theme', 'light')
        break
      case 'dark':
        darkOn()
        setMetaThemeColor('dark')
        localStorage.setItem('theme', 'dark')
        break
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break
    }
  }, [theme, element, onWindowMatch, setMetaThemeColor, lightOn, darkOn])

  darkQuery.addEventListener('change', event => {
    if (!('theme' in localStorage)) {
      if (event.matches) {
        darkOn()
        setMetaThemeColor('dark')
      } else {
        lightOn()
        setMetaThemeColor('light')
      }
    }
  })

  return (
    <ul className='themeSwitcher'>
      <li>
        <button className={`${theme === 'dark' ? 'active' : ''}`} onClick={() => setTheme('dark')}>
          dark
        </button>
      </li>

      <li>/</li>

      <li>
        <button className={`${theme === 'light' ? 'active' : ''}`} onClick={() => setTheme('light')}>
          light
        </button>
      </li>

      <li>/</li>

      <li>
        <button className={`${theme === 'system' ? 'active' : ''}`} onClick={() => setTheme('system')}>
          system
        </button>
      </li>
    </ul>
  )
}
