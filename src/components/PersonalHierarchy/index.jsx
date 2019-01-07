import React from 'react'

import Personal from '../PersonalItem'
import Icon from '../Icon'
import PropTypes from 'prop-types'

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
  flex-wrap: wrap;
  min-height: 18rem;
`

class PersonalHierarchy extends React.Component {
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

  renderItems = () => {
    const card = this.props.mock.map((person, i) => {
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

PersonalHierarchy.propTypes = {
  hierarchy: PropTypes.array.isRequired,
  handleSelectedPersonal: PropTypes.func.isRequired
}
export default PersonalHierarchy
