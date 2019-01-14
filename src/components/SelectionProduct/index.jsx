import React from 'react'

import styled from 'styled-components'
import IconButton from '@material-ui/core/IconButton'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

import Icon from '../Icon'
import SimpleSelect from '../Select'
import Breadcrumbs from '../BreadCrumbs'

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
  grid-template-columns: 5% 20% 60% 15%;
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
  width: 20rem;
  border-top: solid ${wBlue};
  border-left: solid ${wBlue};
  border-right: solid ${wBlue};
  border-width: 1px;
  `
const ThreeWrapper = styled.div`
  grid-column: 3/3;
  grid-row: 2;
  grid-row-end: 2;
  .SimpleSelect-root-74{
    margin-top: 0.5rem;
  }
  `
const FourWrapper = styled.div`
  grid-column: 4/4;
  grid-row: 1;
  grid-row-end: 3;
  `
const ButtonWrapper = styled.div`
  grid-column: 3/3;
  grid-row: 3;
  grid-row-end: 3;
  margin: auto;
  .MuiButtonBase-root-14{
    background-color: white;
    width: 10rem;
    &:hover{
      background-color: rgba(44,112,179,1);
      color: white;
      border: 1px solid white;  
    }
  }
  `
const BreadWrapper = styled.div`
  grid-column: 3/3;
  grid-row: 1;
  grid-row-end: 1;
  margin: auto;
  .breadcrumb{
    margin-bottom: -4rem;
    margin-top: 0.5rem;
  }
  }
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
            <IconButton
            >
              <Icon
                size="3"
                color={wBlue}
              >
                vpn_key
              </Icon>
            </IconButton>
            <IconButton
            >
              <Icon
                size="3"
                color={wBlue}
              >
            save
              </Icon>
            </IconButton>
          </FourWrapper>
          <ButtonWrapper>
            <Button
              variant="outlined"
              color="primary"
            >
              ADD
            </Button>
          </ButtonWrapper>
          <BreadWrapper>
            <Breadcrumbs></Breadcrumbs>
          </BreadWrapper>
        </MainWrapper>
      </div>
    )
  }
}

SelectionProduct.propTypes = {
}

export default SelectionProduct
