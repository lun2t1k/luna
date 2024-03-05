import {lazy} from 'react'
import {withSuspense} from './withSuspense'
import Home from './views/pages/Home'
import PageNotFound from './views/pages/PageNotFound'

const Fonts = withSuspense(lazy(() => import('./views/pages/Fonts')))
const Text = withSuspense(lazy(() => import('./views/pages/Text')))
const Images = withSuspense(lazy(() => import('./views/pages/Images')))
const Icons = withSuspense(lazy(() => import('./views/pages/Icons')))
const Colors = withSuspense(lazy(() => import('./views/pages/Colors')))
const Tools = withSuspense(lazy(() => import('./views/pages/Tools')))
const Ai = withSuspense(lazy(() => import('./views/pages/Ai')))
const Games = withSuspense(lazy(() => import('./views/pages/Games')))

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
    path: '/fonts',
    component: <Fonts />
  },
  {
    path: '/text',
    component: <Text />
  },
  {
    path: '/images',
    component: <Images />
  },
  {
    path: '/icons',
    component: <Icons />
  },
  {
    path: '/colors',
    component: <Colors />
  },
  {
    path: '/tools',
    component: <Tools />
  },
  {
    path: '/ai',
    component: <Ai />
  },
  {
    path: '/games',
    component: <Games />
  }
]

export default routes