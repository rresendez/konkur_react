import React from 'react'

import SceneHOC from '../../components/SceneHOC'
import CardCarousel from '../../components/Dashboard/CardCarousel'

function DashboardPage (props) {
  return (
    <div>
      <CardCarousel />
    </div>
  )
}

export default SceneHOC(DashboardPage)
