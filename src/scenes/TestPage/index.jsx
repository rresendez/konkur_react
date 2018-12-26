import React from 'react'

import Personal from '../../components/PersonalItem'

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
      new: true,
      subordinates: [0, 3]
    }

  ]
}

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.personal = mock.personal
  }

  renderItems = () => {
    const card = this.state.personal.map((person, i) => {
      return (
        <Personal
          key={i}
          personal={person}
        >

        </Personal>
      )
    })
    return card
  }

  render () {
    return (
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default MockChange
