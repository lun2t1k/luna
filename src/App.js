import {useEffect} from 'react'
import {HashRouter, Routes, Route} from 'react-router-dom'
import Header from './views/components/Header'
import Footer from './views/components/Footer'
import routes from './routes'
import initCursor from './utils/cursor'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    initCursor()
    AOS.init()
  }, [])

  return (
    <HashRouter>
      <div className='container'>
        <Header />

        <main>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  )
}
