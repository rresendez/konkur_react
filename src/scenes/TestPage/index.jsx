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
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 3,
        name: 'Max Landis',
        title: 'Directora de la tiendita ',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 4,
        name: 'Max Power',
        title: 'Directora de la tiendita ',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 5,
        name: 'Manuel Costa',
        title: 'Sr. Dir , Replenishment',
        new: false,
        subordinates: [0, 1, 2, 3]

      }
    ], [
      {
        id: 6,
        name: 'Arturo Guardad',
        title: 'Sr, Dir , Replenishment',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 7,
        name: 'Max',
        title: 'Directora de la tiendita ',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 9,
        name: 'Max Pandis',
        title: 'Directora de la tiendita ',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 10,
        name: 'Max Menu',
        title: 'Directora de la tiendita ',
        new: false,
        subordinates: [0, 3]
      }

    ],
    [
      {
        id: 11,
        name: 'Juan  Perez',
        title: 'Sr, Dir , Replenishment',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 12,
        name: 'Jesus Camacho',
        title: 'Directora de la tiendita ',
        new: false,
        subordinates: [0, 3]
      },
      {
        id: 13,
        name: 'Ana Arenas',
        title: 'Directora de la tiendita ',
        new: true,
        subordinates: [0, 3]
      },
      {
        id: 14,
        name: 'Adrea Cancer',
        title: 'Directora de la tiendita ',
        new: true,
        subordinates: [0, 3]
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
    this.state.heirarchy = [
      {
        name: 'Drop box here',
        first: true
      }
    ]
  }

  handleSelectedPersonal = (personal) => {
    console.log('this is the state on parent')
    console.log(personal)
    console.log('array is updated')
    let newArray = []
    if (this.state.heirarchy[0].first) {
      debugger
      newArray = [personal]
    } else {
      newArray = [ ...this.state.heirarchy, personal ]
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
