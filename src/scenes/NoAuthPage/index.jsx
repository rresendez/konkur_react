import React from 'react'
import Splash from '../../components/Splash'

import SceneHOC from '../../components/SceneHOC'

function NoAuthPage (props) {
  return (
    <div>
      <Splash error="403" message="You have forbidden access" />
    </div>
  )
}

export default SceneHOC(NoAuthPage)