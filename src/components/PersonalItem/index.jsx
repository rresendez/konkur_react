import React from 'react'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import { withTheme, withStyles } from '@material-ui/core/styles'

const CardItemContainer = withStyles({
  root: {
    height: '7.83rem',
    width: '18.06rem'
  }
})(Card)

const backgroundPicker = (props) => {
  debugger
  if (props.personal.new) {
    return props.theme.color.warning
  } else {
    return props.theme.color.primary
  }
}

const H3Fixer = styled.div`
  margin-top:0;
  padding-top: .5rem;
`
const StyledCard = styled.div`
   color: ${props => props.theme.typography.getColor(props.theme.color.primary)};
   background-color: ${props => backgroundPicker(props)};
  width: 100%;
  height: 100%;
  text-align: center; 
  cursor: pointer;
`

class Personal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div
        draggable="true"
      >

        <CardItemContainer>
          <StyledCard personal={this.props.personal}>
            <H3Fixer>
              <h3>
                {this.props.personal.name}
              </h3>
            </H3Fixer>
            <h4>
              {this.props.personal.title}
            </h4>
            {console.log(this.props.personal.subordinates)}
          </StyledCard>
        </CardItemContainer>
      </div>
    )
  }
}

export default Personal
