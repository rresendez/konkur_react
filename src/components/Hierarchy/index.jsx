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

  renderItems = () => {
    const card = this.state.personal.map((person, i) => {
      return (
        <div>
          <BaseStyled>
            <StyledPersonal>
              <Personal
                key={i}
                personal={person}
              >

              </Personal>
            </StyledPersonal>
            <StyledArrow>
              <Icon>
                arrow_downward
              </Icon>
            </StyledArrow>
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
