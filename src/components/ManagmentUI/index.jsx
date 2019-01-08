import React from 'react'

import PersonalHierarchy from '../PersonalHierarchy'
import Hierarchy from '../Hierarchy'
import NavBar from '../NavBar'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto 18rem 18rem 18rem auto
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  align-items: strech;
  justify-items: stretch;
  margin-left: 1rem;
  margin-right: 1rem; 
  zoom: 90%;
`

const HWrapper = styled.div`
  width: 20rem;
  grid-column: 1;
  grid-column-end:2;
  grid-row: 2;
  grid-row-end: 4;
`
const PWrapper = styled.div`
  grid-column: 2/7;
  grid-row: ${props => props.idx + 2};
  grid-row-end: ${props => props.idx + 2};
  width: 100%;
  height: 0;
`

class ManagmentUI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.navName = 'user manager'
  }
  renderRight = () => {
    const rightSide = this.props.personal.map((person, idx) => {
      if (idx <= this.props.heirarchy.length) {
        return (
          <PWrapper
            idx={idx}
          >
            <PersonalHierarchy
              mock={person}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >
            </PersonalHierarchy>
          </PWrapper>
        )
      }
    })
    return rightSide
  }
  render () {
    return (
      <div>
        <NavBar
          title={this.state.navName}
        >

        </NavBar>
        <MainWrapper>
          <HWrapper>
            <Hierarchy
              heirarchy={this.props.heirarchy.length === 0 ? [{
                name: 'Drop name here' }] : this.props.heirarchy}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >

            </Hierarchy>
          </HWrapper>
          <PWrapper
            heirarchy={this.props.heirarchy}
          >
          </PWrapper>
          {this.renderRight()}
        </MainWrapper>
      </div>
    )
  }
}

ManagmentUI.propTypes = {
  hierarchy: PropTypes.array.isRequired,
  personal: PropTypes.array.isRequired,
  handleSelectedPersonal: PropTypes.func.isRequired
}

export default ManagmentUI
