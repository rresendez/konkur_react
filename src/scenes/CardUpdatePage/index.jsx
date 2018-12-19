import React from 'react'
import CardDetailContainer from '../../containers/CardDetailContainer'

export default function CardUpdatePage (props) {
  return (
    <div>
      <CardDetailContainer crud="update" {...props} />
    </div>
  )
}
