import React from 'react'
import Splash from '../../components/Splash'
import styled from 'styled-components'


class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }
  handleSelectedLine = (line) => {
  }

  render () {
    return ( 
       <Splash></Splash>
    )
  }
}

export default MockChange
