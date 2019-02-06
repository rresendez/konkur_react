import React from 'react'
import Splash from '../../components/Splash'

import SceneHOC from '../../components/SceneHOC'

function NoMatchPage (props) {
  return (
    <div>
      <Splash error="404" message="Resource not found alv." />
    </div>
  )
}

export default SceneHOC(NoMatchPage)