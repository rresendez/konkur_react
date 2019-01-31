import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledBox = styled.div`
  border: solid black 1px;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const StyledCode = styled.div`
  font-size: 10rem;
  text-transform: uppercase;
   margin: 0 auto;
`

const Header = styled.div`
  width: 100%;
`
const StyledFace = styled.div`
  display: inline-block;
  width: 40%;
`
const StyledFace2 = styled.div`
  display: inline-block;
  width: 40%;
`


class Splash extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return (
     <Container>
       <StyledBox>
           <StyledCode>
         <Header>
           Error #404
         </Header>
           </StyledCode>
           <StyledFace>
          <Icon
            size="10"
          >
            sentiment_dissatisfied
              </Icon>
           </StyledFace>
           <StyledFace2>
          <Icon
            size="10"
          >
            sentiment_dissatisfied
              </Icon>
           </StyledFace2>
       </StyledBox>
     </Container>
    )
  }
}

export default Splash
