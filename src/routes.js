import {lazy} from 'react'
import {withSuspense} from './withSuspense'
import Home from './views/pages/Home'
import PageNotFound from './views/pages/PageNotFound'

const Projects = withSuspense(lazy(() => import('./views/pages/Projects')))
const Skepti = withSuspense(lazy(() => import('./views/pages/projects/Skepti/Skepti')))
const Wallet = withSuspense(lazy(() => import('./views/pages/projects/Wallet/Wallet')))
const FoodDelivery = withSuspense(lazy(() => import('./views/pages/projects/FoodDelivery/FoodDelivery')))
const Tickets = withSuspense(lazy(() => import('./views/pages/projects/Tickets/Tickets')))
const Fitness = withSuspense(lazy(() => import('./views/pages/projects/Fitness/Fitness')))
const BusinessCard = withSuspense(lazy(() => import('./views/pages/projects/BusinessCard/BusinessCard')))
const Cryptocurrency = withSuspense(lazy(() => import('./views/pages/projects/Cryptocurrency/Cryptocurrency')))
const SmartHome = withSuspense(lazy(() => import('./views/pages/projects/SmartHome/SmartHome')))
const SwissWatch = withSuspense(lazy(() => import('./views/pages/projects/SwissWatch/SwissWatch')))
const FreshPress = withSuspense(lazy(() => import('./views/pages/projects/FreshPress/FreshPress')))
const Fonts = withSuspense(lazy(() => import('./views/pages/Fonts')))
const Text = withSuspense(lazy(() => import('./views/pages/Text')))
const Images = withSuspense(lazy(() => import('./views/pages/Images')))
const Icons = withSuspense(lazy(() => import('./views/pages/Icons')))
const Colors = withSuspense(lazy(() => import('./views/pages/Colors')))
const Tools = withSuspense(lazy(() => import('./views/pages/Tools')))
const Ai = withSuspense(lazy(() => import('./views/pages/Ai')))
const Mockups = withSuspense(lazy(() => import('./views/pages/Mockups')))
const Design = withSuspense(lazy(() => import('./views/pages/Design')))
const Assets = withSuspense(lazy(() => import('./views/pages/Assets')))
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
    path: '/projects',
    component: <Projects />
  },
  {
    path: '/projects/skepti',
    component: <Skepti />
  },
  {
    path: '/projects/wallet',
    component: <Wallet />
  },
  {
    path: '/projects/food-delivery',
    component: <FoodDelivery />
  },
  {
    path: '/projects/tickets',
    component: <Tickets />
  },
  {
    path: '/projects/fitness',
    component: <Fitness />
  },
  {
    path: '/projects/business-card',
    component: <BusinessCard />
  },
  {
    path: '/projects/crypto-currency-courses',
    component: <Cryptocurrency />
  },
  {
    path: '/projects/smart-home',
    component: <SmartHome />
  },
  {
    path: '/projects/swiss-watch',
    component: <SwissWatch />
  },
  {
    path: '/projects/fresh-and-press',
    component: <FreshPress />
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
    path: '/mockups',
    component: <Mockups />
  },
  {
    path: '/design',
    component: <Design />
  },
  {
    path: '/assets',
    component: <Assets />
  },
  {
    path: '/games',
    component: <Games />
  }
]

export default routes