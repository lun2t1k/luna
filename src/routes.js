import {lazy} from 'react'
import {withSuspense} from './withSuspense'
import Home from './views/pages/Home'
import Tools from './views/pages/Tools'
// import PageNotFound from './views/pages/PageNotFound'

// const Projects = withSuspense(lazy(() => import('./views/pages/projects/Projects')))
// const ArMuseum = withSuspense(lazy(() => import('./views/pages/portfolio/ar-museum/ArMuseum')))
// const PrivacyPolicy = withSuspense(lazy(() => import('./views/pages/PrivacyPolicy')))

const routes = [
  // {
  //   path: '*',
  //   component: <PageNotFound />
  // },
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/tools',
    component: <Tools />
  },
  // {
  //   path: '/projects/ar-museum',
  //   component: <ArMuseum />
  // },
  // {
  //   path: '/privacy-policy',
  //   component: <PrivacyPolicy />
  // }
]

export default routes