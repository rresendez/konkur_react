import React from 'react'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import { withTheme, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'

import Icon from '../Icon'

const CardItemContainer = withStyles({
  root: {
    height: '2.5rem',
    width: '15rem'
  }
})(Card)

const H3Fixer = styled.div`
  margin-top: auto;
  display: inline-block;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.6rem;
`
const CardSize = styled.div`
.MuiPaper-root-44{
  height: 2.5rem;
 width: 15rem;
 @media (max-width: 768px){
  width: 10rem;
 }
}
`
const StyledCancel = styled.div`
float:right;
`
const StyledButtonCancel = styled.div`
margin-top: -.15rem;
`

const StyledCard = styled.div`
   color: white;
   background-color: ${props => props.theme.color.primary};
  width: 100%;
  height: 100%;
  text-align: left; 
  cursor: pointer;
`

class LineItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  dragstartHandler = (event) => {
    console.log(event.currentTarget.getAttribute('data-card'))
    event.dataTransfer.setData(
      'application/json', (event.currentTarget.getAttribute('data-card'))
    )
  }

  render () {
    return (
      <div
        draggable="true"
        onDragStart={this.dragstartHandler}
        data-card={JSON.stringify(this.props.line)}
      >
        <CardSize>
          <CardItemContainer>
            <StyledCard>
              <H3Fixer>
                {this.props.line.department + ' '}
                {this.props.line.name}
              </H3Fixer>
              <StyledCancel>
                <IconButton>
                  <StyledButtonCancel>
                    <Icon>
                        cancel
                    </Icon>
                  </StyledButtonCancel>
                </IconButton>
              </StyledCancel>
            </StyledCard>
          </CardItemContainer>
        </CardSize>
      </div>
    )
  }
}

LineItem.propTypes = {
  department: PropTypes.number,
  name: PropTypes.string
}
export default LineItem
