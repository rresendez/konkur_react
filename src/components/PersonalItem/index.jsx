import React from 'react'
import Card from '@material-ui/core/Card'
import styled from 'styled-components'
import { withTheme, withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const CardItemContainer = withStyles({
  root: {
    height: '7rem',
    width: '17rem'
  }
})(Card)

const backgroundPicker = (props) => {
  if (props.personal.new) {
    return 'rgba(191,144,0,1)'
  } else {
    return props.theme.color.primary
  }
}

const H3Fixer = styled.div`
  margin-top:0;
  padding-top: .5rem;
  a{
      text-decoration: none;
      color: white;
    &:hover{
      color: ${props => props.theme.color.warning};
      text-decoration: underline;
    }
  }
`
const StyledCard = styled.div`
   color: ${props => props.theme.typography.getColor(props.theme.color.primary)};
   background-color: ${props => backgroundPicker(props)};
  width: 100%;
  height: 100%;
  text-align: center; 
  cursor: pointer;
  margin-bottom:auto;
  &:hover{
   background-color: rgba(20,100,190,1);
  }
`

class Personal extends React.Component {
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
        data-card={JSON.stringify(this.props.personal)}
        onDragStart={this.dragstartHandler}
      >

        <CardItemContainer>
          <StyledCard personal={this.props.personal}>
            <H3Fixer>
              <a href="">
                <h3>
                  {this.props.personal.name}
                </h3>
              </a>
            </H3Fixer>
            <h4>
              {this.props.personal.title}
            </h4>
          </StyledCard>
        </CardItemContainer>
      </div>
    )
  }
}
Personal.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  new: PropTypes.bool.isRequired,
  subordinates: PropTypes.array
}
export default Personal
