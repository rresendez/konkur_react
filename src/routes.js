import Loadable from 'react-loadable'

import Loader from './components/Loader'

const AsyncCardCreatePage = Loadable({
  loader: () => import('./scenes/CardCreatePage'),
  loading: Loader
})

const routes = [
  {
    path: '/',
    component: AsyncCardCreatePage,
    exact: true
  }
]

export default routes
