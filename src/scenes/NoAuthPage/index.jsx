import React from 'react'
import Splash from '../../components/Splash'

import SceneHOC from '../../components/SceneHOC'

function NoAuthPage (props) {
  return (
    <div>
      <Splash error="403" message="Access to this page is Forbidden. You Don't have permision to view this page" />
    </div>
  )
}

export default SceneHOC(NoAuthPage)