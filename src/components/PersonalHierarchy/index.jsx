import React from 'react'

import Personal from '../PersonalItem'
import Icon from '../Icon'

import styled from 'styled-components'

const BaseStyled = styled.div`
  width: 100%;
`
const StyledPersonal = styled.div`
  margin: 0 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const StyledHorizontal = styled.div`
  width: 100%;
  background-color: rgba(222,235,247,1);
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`

const StyledArrow = styled.div`
  display: block;
  text-align: center;
  font-size: 5rem;
  margin-bottom: 1rem;
  color: rgba(189,215,238,1)
`

class PersonalHierarchy extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.personal = this.props.mock.personal
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
        <StyledHorizontal>
          {this.renderItems()}
        </StyledHorizontal>
      </div>
    )
  }
}

export default PersonalHierarchy
