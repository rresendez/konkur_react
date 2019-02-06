import React from 'react'

import CardDetailContainer from '../../containers/CardDetailContainer'
import SceneHOC from '../../components/SceneHOC'

function CardCreatePage (props) {
  return (
    <div>
      <CardDetailContainer crud="create" {...props} />
    </div>
  )
}


export default SceneHOC(CardCreatePage)