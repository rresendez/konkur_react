import React from 'react'

import TestHierarchy from '../TestHierarchy'

import SceneHOC from '../../components/SceneHOC'

function AdminHirearchyPage (props) {
  return (
    <div>
      <TestHierarchy />
    </div>
  )
}

export default SceneHOC(AdminHirearchyPage)