import React from 'react'

import PersonalHierarchy from '../../components/PersonalHierarchy'

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
    },
    {
      id: 3,
      name: 'Max Landis',
      title: 'Directora de la tiendita ',
      new: true,
      subordinates: [0, 3]
    },
    {
      id: 4,
      name: 'Max Power',
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
    this.state.selectedPersonal = {}
  }

  handleSelectedPersonal = (personal) => {
    console.log('this is the state on parent')
    console.log(personal)
    this.setState({
      selectedPersonal: personal
    })
  }

  render () {
    return (
      <div>
        <PersonalHierarchy
          mock={this.state.mock}
          handleSelectedPersonal={this.handleSelectedPersonal}
        >
        </PersonalHierarchy>
        {console.log('current selected personal' + JSON.stringify(this.state.selectedPersonal))}
      </div>
    )
  }
}

export default MockChange
