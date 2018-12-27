import React from 'react'

import Hierarchy from '../../components/Hierarchy'

const mock = {
  personal: [
    {
      id: 0,
      name: 'Jeffrey Costa',
      title: 'Sr. Dir , Replenishment',
      new: false,
      subordinates: [0, 1, 2, 3]

    },
    {
      id: 1,
      name: 'Shaun Guardad',
      title: 'Sr, Dir , Replenishment',
      new: false,
      subordinates: [0, 3]
    },
    {
      id: 2,
      name: 'Max',
      title: 'Directora de la tiendita ',
      new: true,
      subordinates: [0, 3]
    }

  ]
}

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.mock = mock
  }

  render () {
    return (
      <div>
        <Hierarchy
          mock={this.state.mock}
        >
        </Hierarchy>
      </div>
    )
  }
}

export default MockChange
