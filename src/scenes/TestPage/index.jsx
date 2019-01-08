import React from 'react'

import ManagmentUI from '../../components/ManagmentUI'

const mock = {
  personal: [
    [
      {
        id: 0,
        name: 'Jeffrey Costa',
        title: 'Sr. Dir , Replenishment',
        new: false,
        heirarchyLevel: 2
      },
      {
        id: 1,
        name: 'Shaun Guardad',
        title: 'Sr, Dir , Replenishment',
        new: false,
        heirarchyLevel: 2
      },
      {
        id: 2,
        name: 'Max',
        title: 'Directora de la tiendita ',
        new: false,
        heirarchyLevel: 3
      },
      {
        id: 3,
        name: 'Max Landis',
        title: 'Directora de la tiendita ',
        new: false,
        heirarchyLevel: 4
      },
      {
        id: 4,
        name: 'Max Power',
        title: 'Directora de la tiendita ',
        new: false,
        heirarchyLevel: 5
      },
      {
        id: 5,
        name: 'Manuel Costa',
        title: 'Sr. Dir , Replenishment',
        new: true,
        heirarchyLevel: 5
      }
    ], [
      {
        id: 6,
        name: 'Arturo Guardad',
        title: 'Sr, Dir , Replenishment',
        new: false,
        heirarchyLevel: 2
      },
      {
        id: 7,
        name: 'Max',
        title: 'Directora de la tiendita ',
        new: false,
        heirarchyLevel: 3
      },
      {
        id: 9,
        name: 'Max Pandis',
        title: 'Directora de la tiendita ',
        new: false,
        heirarchyLevel: 4
      },
      {
        id: 10,
        name: 'Max Menu',
        title: 'Directora de la tiendita ',
        new: false,
        heirarchyLevel: 5
      }

    ],
    [
      {
        id: 11,
        name: 'Juan  Perez',
        title: 'Sr, Dir , Replenishment',
        new: false,
        heirarchyLevel: 3
      },
      {
        id: 12,
        name: 'Jesus Cruz',
        title: 'Directora de la tiendita ',
        new: false
      },
      {
        id: 13,
        name: 'Ana Arenas',
        title: 'Directora de la tiendita ',
        new: true,
        heirarchyLevel: 2
      },
      {
        id: 14,
        name: 'Adrea Cancer',
        title: 'Directora de la tiendita ',
        new: true,
        heirarchyLevel: 3
      }

    ],
    []
  ]
}

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.selectedPersonal = {}
    this.state.personal = mock.personal
    this.state.heirarchy = []
  }

  handleSelectedPersonal = (personal) => {
    console.log('this is the state on parent')
    console.log(personal)
    console.log('array is updated')
    console.log('current h level ' + this.state.selectedPersonal.heirarchyLevel)
    console.log('passed h level ' + personal.heirarchyLevel)
    let newArray = []
    if (!this.state.selectedPersonal.heirarchyLevel) {
      newArray = [personal]
    } else {
      if (this.state.selectedPersonal.heirarchyLevel < personal.heirarchyLevel) {
        newArray = [ ...this.state.heirarchy, personal ]
      } else if (this.state.selectedPersonal.heirarchyLevel === personal.heirarchyLevel) {
        this.state.heirarchy.pop()
        newArray = [...this.state.heirarchy, personal]
      } else if (this.state.selectedPersonal.heirarchyLevel > personal.heirarchyLevel) {
        newArray = [personal]
      } else {
        newArray = [{
          name: 'No Heirarchy level defined',
          first: false
        }]
      }
    }

    this.setState({
      selectedPersonal: personal,
      heirarchy: newArray

    })
  }

  render () {
    return (
      <div>
        <ManagmentUI
          handleSelectedPersonal={this.handleSelectedPersonal}
          personal={this.state.personal}
          heirarchy={this.state.heirarchy}
        >
        </ManagmentUI>
        {console.log('current selected personal' + JSON.stringify(this.state.selectedPersonal))}
      </div>
    )
  }
}

export default MockChange
