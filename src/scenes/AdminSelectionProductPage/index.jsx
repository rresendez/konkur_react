import React from 'react'
import TestPage from '../TestPage'

import SceneHOC from '../../components/SceneHOC'

function AdminSelectionProductPage (props) {
  return (
    <div>
      <TestPage />
    </div>
  )
}

export default SceneHOC(AdminSelectionProductPage)