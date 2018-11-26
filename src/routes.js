import Loadable from 'react-loadable'

import Loader from './components/Loader'

const AsyncCardCreatePage = Loadable({
  loader: () => import('./scenes/CardCreatePage'),
  loading: Loader
})

const AsyncHomePage = Loadable({
  loader: () => import('./scenes/HomePage'),
  loading: Loader
})

const routes = [
  {
    path: '/card',
    component: AsyncCardCreatePage,
    exact: true
  },
  {
    path: '/',
    component: AsyncHomePage,
    exact: true
  }
]

export default routes
