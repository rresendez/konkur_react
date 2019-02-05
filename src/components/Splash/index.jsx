import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Card from '@material-ui/core/Card'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
  const StyledBox = styled.div`
  justify-content: start;
  padding: 1rem;
  margin: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const StyledCode = styled.div`
  font-size: 9rem;
  text-transform: uppercase;
   margin: 0 auto;
   @media only screen and (max-width: 930px ) {
     font-size: 5rem;
   }
`

const Header = styled.div`
  width: 100%;
  color: ${props => props.theme.typography.colorLightGray};
  padding: 1rem;
`
const StyledFace = styled.div`
  display: inline-block;
  width: 43%;
   padding: 1rem;
`
const StyledMsgBox = styled.div`
  display: inline-block;
  width: 35vw;
  height: 100%;
  background-color: ${props => props.theme.color.mediumblue};
  box-sizing: border-box;
  overflow: hide;
  p{
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    @media only screen and (max-width: 930px ) {
     font-size: 1.2rem;
   }
  }
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
           {this.props.error}
         </Header>
           </StyledCode>
           <StyledFace>
          <Icon
            size="10"
            color={props => props.theme.color.yellow}
          >
            sentiment_dissatisfied
              </Icon>
           </StyledFace>
           <Card>
             <StyledMsgBox>
          <p>
          {this.props.message}
          </p>
             </StyledMsgBox>
           </Card>
       </StyledBox>
     </Container>
    )
  }
}

export default Splash
