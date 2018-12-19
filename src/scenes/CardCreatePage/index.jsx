import React from 'react'
import CardDetailContainer from '../../containers/CardDetailContainer'

export default function CardCreatePage (props) {
  return (
    <div>
      <CardDetailContainer crud="create" {...props} />
    </div>
  )
}
