import React from 'react'

import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Icon from '../Icon'

const wBlue = 'rgba(44,112,179,1)'

const Togle = styled.div`
  margin: auto;
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 25% 55% 10%;
  grid-templte-rows: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`
const OneWrapper = styled.div`
  grid-column: 1/1;
  grid-row: 1;
  grid-row-end: 1;
  padding: 0;
  `
const TwoWrapper = styled.div`
  grid-column: 2/2;
  grid-row: 1;
  grid-row-end: 1;
  margin-top: auto;
  `
const ThreeWrapper = styled.div`
  grid-column: 3/3;
  border: solid black;
  grid-row: 1;
  grid-row-end: 3;
  `
const FourWrapper = styled.div`
  grid-column: 4/4;
  border: solid black;
  grid-row: 1;
  grid-row-end: 3;
  `

class SelectionProduct extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.navName = 'user manager'
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    return (
      <div>
        <MainWrapper>
          <OneWrapper>
            <IconButton
            >
              <Icon
                size="3"
                color={wBlue}
              >
                skip_previous
              </Icon>
            </IconButton>
          </OneWrapper>
          <TwoWrapper>
            <AppBar position="static" color="default">
              <Togle>
                <Tabs
                  value={this.state.value}
                  onChange={this.handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                >
                  <Tab label="Item One" />
                  <Tab label="Item Two" />
                </Tabs>
              </Togle>
            </AppBar>
          </TwoWrapper>
          <ThreeWrapper>
            <h2>Three</h2>
          </ThreeWrapper>
          <FourWrapper>
            <h2>Four</h2>
          </FourWrapper>
        </MainWrapper>
      </div>
    )
  }
}

SelectionProduct.propTypes = {
}

export default SelectionProduct
