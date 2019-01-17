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

const AsyncTestPage = Loadable({
  loader: () => import('./scenes/TestPage'),
  loading: Loader
})

const AsyncCardUpdatePage = Loadable({
  loader: () => import('./scenes/CardUpdatePage'),
  loading: Loader
})

const AsyncAdminHierarchyPage = Loadable({
  loader: () => import('./scenes/AdminHierarchyPage'),
  loading: Loader
})

const AsyncAdminSelectionProductPage = Loadable({
  loader: () => import('./scenes/AdminSelectionProductPage'),
  loading: Loader
})

const routes = [
  {
    path: '/card',
    component: AsyncCardCreatePage,
    exact: true
  },
  {
    path: '/card/:id',
    component: AsyncCardUpdatePage,
    exact: true
  },
  {
    path: '/',
    component: AsyncHomePage,
    exact: true
  },
  {
    path: '/testing',
    component: AsyncTestPage,
    exact: true
  },
  {
    path: '/admin',
    component: AsyncAdminHierarchyPage,
    exact: true
  },
  {
    path: '/admin/products',
    component: AsyncAdminSelectionProductPage,
    exact: true
  }
]

export default routes
