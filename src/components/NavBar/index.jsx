import React from 'react'
import styled from 'styled-components'
import Tabs from '../Tabs'
import SearchField from '../SearchField'

const MainWrapper = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(6,1fr)
  grid-template-rows: auto
  align-items: strech;
  justify-items: stretch;
  margin-left: 1rem;
  margin-right: 1rem; 
`

const UserWrapper = styled.div`
  grid-column: 1;
  grid-column-end:2;
  grid-row: 1;
  grid-row-end: 1;
  color: rgba(0,112,192,1);
  text-align: center;
  letter-spacing: .2rem;
  margin-top: auto; 
  margin-bottom: -.5rem;
  font-family:${props => props.theme.typography.fontFamily};
  `

const TabWrapper = styled.div`
  grid-column: 3;
  grid-row: 1;
  grid-row-end: 1;
  padding-top: 1rem;
  margin-top: auto;
  `

const SearchWrapper = styled.div`
  grid-column: 6;
  grid-row: 1;
  grid-row-end: 1;
  padding-top: 1rem;
  `
class NavBar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.title = this.props.title.toUpperCase()
  }
  render () {
    return (
      <div>
        <MainWrapper>
          <UserWrapper>
            <h2>{this.state.title}</h2>
          </UserWrapper>
          <TabWrapper>
            <Tabs></Tabs>
          </TabWrapper>
          <SearchWrapper>
            <SearchField>
            </SearchField>
          </SearchWrapper>
        </MainWrapper>
      </div>
    )
  }
}

export default NavBar
