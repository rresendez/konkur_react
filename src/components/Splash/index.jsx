import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Card from '@material-ui/core/Card'
import wlmt from './star.png'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: space;
  font-family: 'PT Sans', sans-serif;
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
  letter-spacing: 1rem;
  color: red;
  text-transform: uppercase;
   margin: 0 auto;
   @media only screen and (max-width: 930px ) {
     font-size: 5rem;
   }
    @media only screen and (max-width: 400px ) {
     font-size: 3rem;
     margin-bottom: 1rem;
   }
`

const Header = styled.div`
  width: 100%;
  color: ${props => props.theme.typography.colorLightGray};
  padding: 1rem;
   @media only screen and (max-width: 400px ) {
     height: 5rem;
     top: 10px;
   }
  img{
    position: relative;
    height: 8rem;
    top: 13px;
      @media only screen and (max-width: 930px ) {
     height: 5rem;
     top: 10px;
   }
    @media only screen and (max-width: 400px ) {
     height: 4rem;
     top: 13px;
   }
  }
`
const StyledFace = styled.div`
  display: inline-block;
  width: 43%;
   padding: 1rem;
`
const StyledMsgBox = styled.div`
  display: inline-block;
  letter-spacing: 0.5rem;
  line-height: 2.5rem;
  width: 35vw;
  height: 100%;
  min-width: 200px;
  background-color: ${props => props.theme.color.primary};
  box-sizing: border-box;
  overflow: hide;
  p{
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    @media only screen and (max-width: 930px ) {
     font-size: 1.2rem;
     letter-spacing: 0.5rem;
     line-height: 2rem;
   }
    @media only screen and (max-width: 440px ) {
     letter-spacing: 0.3rem;
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
              Err<img src={wlmt} alt="" />r #{this.props.error}
         </Header>
           </StyledCode>
           <StyledFace>
          <Icon
            size="10"
            color={props => props.theme.color.secondary}
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
