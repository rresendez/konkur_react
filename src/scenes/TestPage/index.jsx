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
       <Splash
       error={"Error #404"}
       message={"This error happend because you are an Idiot and shouldn´t be allowed to use a computer."}
       >

       </Splash>
    )
  }
}

export default MockChange
