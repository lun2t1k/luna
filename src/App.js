import {useEffect} from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Footer from './views/components/Footer'
import Header from './views/components/Header'
import routes from './routes'

import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'

AOS.init()

import initThemes from './utils/theme'
import initCursor from './utils/cursor'
import initSmoothScroll from './utils/smooth-scroll'

export default function App() {
  useEffect(() => {
    initThemes()
    initCursor()
    initSmoothScroll()
  }, [])

  return (
    <HashRouter>
      <Header />

      <Routes>
        {routes.map(route => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>

      <Footer />
    </HashRouter>
  )
}
