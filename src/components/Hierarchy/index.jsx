import React from 'react'

import Personal from '../PersonalItem'
import Icon from '../Icon'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const BaseStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(222,235,247,1)
`
const StyledPersonal = styled.div`
  &:first-child {
    margin-top: 1rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }

`

const StyledArrow = styled.div`
  display: block;
  text-align: center;
  font-size: 5rem;
  margin-bottom: -20px;
  color: rgba(189,215,238,1)
`

class Hierarchy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  dragHandler = (event) => {
    event.preventDefault()
    console.log('draggin')
  }

  dropHandler = (event) => {
    event.preventDefault()
    let data = JSON.parse(event.dataTransfer.getData('application/json'))
    console.log(data)
    this.props.handleSelectedPersonal(data)
  }

  renderArrow = (i) => {
    if (i !== this.props.heirarchy
      .length - 1) {
      return (
        <StyledArrow>
          <Icon>
            arrow_downward
          </Icon>
        </StyledArrow>
      )
    }
    return null
  }

  renderItems = () => {
    const card = this.props.heirarchy.map((person, i) => {
      return (
        <div
          key={i}
        >
          <BaseStyled>
            <StyledPersonal>
              <Personal
                key={i}
                personal={person}
              >

              </Personal>
            </StyledPersonal>
            {this.renderArrow(i)}
          </BaseStyled>
        </div>
      )
    })
    return card
  }

  render () {
    return (
      <div
        id='target'
        onDrop={(event) => { this.dropHandler(event) }}
        onDragOver={(event) => { this.dragHandler(event) }}
      >
        {this.renderItems()}
      </div>
    )
  }
}
Hierarchy.propTypes = {
  hierarchy: PropTypes.array.isRequired,
  handleSelectedPersonal: PropTypes.func.isRequired
}
export default Hierarchy
