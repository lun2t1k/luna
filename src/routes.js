import {lazy} from 'react'
import {withSuspense} from './withSuspense'
import Home from './views/pages/Home'
import PageNotFound from './views/pages/PageNotFound'

const Tools = withSuspense(lazy(() => import('./views/pages/Tools')))

const routes = [
  {
    path: '*',
    component: <PageNotFound />
  },
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/tools',
    component: <Tools />
  }
]

export default routes