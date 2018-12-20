import React from 'react'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import { withTheme, withStyles } from '@material-ui/core/styles'

const CardItemContainer = withStyles({
  root: {
    height: '100%',
    color: 'rgb(255,40,0,1);'
  }
})(Card)

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

class Personal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div>
        <h1>Hola Mundo!</h1>
        <StyledCard>
          <CardItemContainer>
            <h3>
              Ferrari
            </h3>
          </CardItemContainer>
        </StyledCard>
      </div>
    )
  }
}

export default Personal
