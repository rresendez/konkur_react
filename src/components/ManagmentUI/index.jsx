import React from 'react'

import PersonalHierarchy from '../PersonalHierarchy'
import Hierarchy from '../Hierarchy'

import styled from 'styled-components'

const MainWrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit,6, 1fr);
  grid-template-rows: auto 18rem 18rem 18rem 18rem auto
  align-items: strech;
  justify-items: stretch;
`
const HeadWrapper = styled.div`
  grid-column: 1;
  grid-colum-end:6;
  grid-row: 1;
  grid-row-end: 1;
  color: blue;
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
  height: 0;
`
const PWrapper2 = styled.div`
  grid-column: 2;
  grid-colum-end:6;
  grid-row: 3;
  grid-row-end: 3;
  width: 100%;
   height: 0;
`
const PWrapper3 = styled.div`
  grid-column: 2;
  grid-colum-end:6;
  grid-row: 4;
  grid-row-end: 4;
  width: 100%;
   height: 0;
`
const PWrapper4 = styled.div`
  grid-column: 2;
  grid-colum-end:6;
  grid-row: 5;
  grid-row-end: 5;
  width: 100%;
   height: 0;
`

class ManagmentUI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.mock = this.props.personal
    this.state.selectedPersonal = {}
  }

  render () {
    return (
      <div>
        <MainWrapper>
          <HeadWrapper>
            <h1>This is where the header goes</h1>
          </HeadWrapper>
          <HWrapper>
            <Hierarchy
              mock={this.state.mock[0]}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >

            </Hierarchy>
          </HWrapper>
          <PWrapper>
            <PersonalHierarchy
              mock={this.state.mock[0]}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >
            </PersonalHierarchy>
          </PWrapper>
          <PWrapper2>
            <PersonalHierarchy
              mock={this.state.mock[1]}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >
            </PersonalHierarchy>
          </PWrapper2>
          <PWrapper3>
            <PersonalHierarchy
              mock={this.state.mock[2]}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >
            </PersonalHierarchy>
          </PWrapper3>
          <PWrapper4>
            <PersonalHierarchy
              mock={this.state.mock[3]}
              handleSelectedPersonal={this.props.handleSelectedPersonal}
            >
            </PersonalHierarchy>
          </PWrapper4>
        </MainWrapper>
      </div>
    )
  }
}

export default ManagmentUI
