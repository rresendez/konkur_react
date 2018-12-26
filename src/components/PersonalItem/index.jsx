import React from 'react'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import { withTheme, withStyles } from '@material-ui/core/styles'

const CardItemContainer = withStyles({
  root: {
    height: '100%',
    color: 'rgba(255,255,255,1);',
    background: 'rgba(46,117,182,1)'
  }
})(Card)

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 1rem;
  margin: 1rem;
  text-align: center; 
  height: 7.83rem;
  width: 18.06rem;
  cursor: pointer;
`

class Personal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <StyledCard>
          <CardItemContainer>
            <h3>
              {this.props.personal.name}
            </h3>
            <h4>
              {this.props.personal.title}
            </h4>
            {console.log(this.props.personal.subordinates)}
          </CardItemContainer>
        </StyledCard>
      </div>
    )
  }
}

export default Personal
