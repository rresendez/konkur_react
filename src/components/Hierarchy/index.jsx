import React from 'react'

import Personal from '../PersonalItem'
import Icon from '../Icon'

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
  margin-bottom: 1rem;
`

const StyledArrow = styled.div`
  display: block;
  text-align: center;
  font-size: 5rem;
  margin-bottom: 1rem;
  color: rgba(189,215,238,1)
`

class Hierarchy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.personal = this.props.mock.personal
  }

  renderArrow = (i) => {
    if (i !== this.state.personal.length - 1) {
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
    const card = this.state.personal.map((person, i) => {
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
      <div>
        {this.renderItems()}
      </div>
    )
  }
}

export default Hierarchy
