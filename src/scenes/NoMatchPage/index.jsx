import React from 'react'
import Splash from '../../components/Splash'

import SceneHOC from '../../components/SceneHOC'

function NoMatchPage (props) {
  return (
    <div>
      <Splash error="404" message="The Resource you are looking for doesn´t exist" />
    </div>
  )
}

export default NoMatchPage