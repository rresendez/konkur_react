import React from 'react'

import styles from './styles.module.css'

const Holi = () => ((
  <div className="holiboli">
  holi
    <div className={styles.bebi}>
      holi encapsulado
    </div>
  </div>
))

const routes = [
  {
    path: '/',
    component: Holi,
    exact: true
  }
]

export default routes
