import React from 'react'

import CardDetailContainer from '../../containers/CardDetailContainer'
import SceneHOC from '../../components/SceneHOC'

function CardUpdatePage (props) {
  return (
    <div>
      <CardDetailContainer crud="update" {...props} />
    </div>
  )
}

export default SceneHOC(CardUpdatePage)