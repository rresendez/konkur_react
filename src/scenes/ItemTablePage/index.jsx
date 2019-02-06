import React from 'react'
import ItemTable from '../../components/Dashboard/datatable/ItemTable'

import SceneHOC from '../../components/SceneHOC'

function ItemTablePage (props) {
  return (
    <ItemTable />
  )
}

export default SceneHOC(ItemTablePage)