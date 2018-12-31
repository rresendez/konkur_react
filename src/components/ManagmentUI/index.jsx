import React from 'react'

import PersonalHierarchy from '../PersonalHierarchy'
import Hierarchy from '../Hierarchy'

import styled from 'styled-components'

const MainWrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(auto-fit,6, 1fr);
  grid-template-rows: repeat(3, auto);
  justify-items: strech;
  align-items: strech;
`
const HWrapper = styled.div`
  grid-column: 1;
  grid-colum-end:2;
  grid-row: 2;
  grid-row-end: 4;
`
const PWrapper = styled.div`
  grid-column: 2;
  grid-colum-end:6;
  grid-row: 2;
  grid-row-end: 2;
  width: 100%;
`

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

class ManagmentUI extends React.Component {
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
        <MainWrapper>
          <HWrapper>
            <Hierarchy
              mock={this.state.mock}
            >

            </Hierarchy>
          </HWrapper>
          <PWrapper>
            <PersonalHierarchy
              mock={this.state.mock}
              handleSelectedPersonal={this.handleSelectedPersonal}
            >
            </PersonalHierarchy>
            {console.log('current selected personal' + JSON.stringify(this.state.selectedPersonal))}
          </PWrapper>
        </MainWrapper>
      </div>
    )
  }
}

export default ManagmentUI
