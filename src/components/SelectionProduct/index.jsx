import React from 'react'

import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import Icon from '../Icon'
import SimpleSelect from '../Select'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const wBlue = 'rgba(44,112,179,1)'

const Togle = styled.div`
  margin: auto;
`
const Back = styled.div`
  padding: 0;
  .MuiIconButton-root-8{
    padding: 0;
    margin-top: 1rem;
  }
`

const MainWrapper = styled.div`
  display: grid;
  grid-template-columns: 10% 25% 55% 10%;
  grid-templte-rows: repeat(3, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  background-color: rgba(222,235,247,1);
`
const OneWrapper = styled.div`
  grid-column: 1/1;
  grid-row: 1;
  grid-row-end: 1;
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
  grid-row: 2;
  grid-row-end: 2;
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
            <Back>
              <IconButton
              >
                <Icon
                  size="3"
                  color={wBlue}
                >
                  skip_previous
                </Icon>
              </IconButton>
            </Back>
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
                  <Tab label="Owner" />
                  <Tab label="Viewer" />
                </Tabs>
              </Togle>
            </AppBar>
          </TwoWrapper>
          <ThreeWrapper>
            <SimpleSelect
              selects={this.props.selects}
            >
            </SimpleSelect>
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
