import React from 'react'
import styled from 'styled-components'
import Icon from '../Icon'
import Card from '@material-ui/core/Card'
import { withStyles } from '@material-ui/core/styles'
import wlmt from './star.png'

const CardItemContainer = withStyles({
  root: {
    borderRadius: '25%',
  }
})(Card)

const IconDelay = withStyles({
  root: {
    transition: "color 0.5s ease",
  }
})(Icon)

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
   @media only screen and (max-width: 400px ) {
     #itemcontainer {
       margin: auto;
     }
   }
`

const StyledCode = styled.div`
  font-size: 9rem;
  letter-spacing: 1rem;
  text-transform: uppercase;
   margin: 0 auto;
   @media only screen and (max-width: 930px ) {
     font-size: 5rem;
   }
    @media only screen and (max-width: 400px ) {
     margin-bottom: 1rem;
   }
`

const StyledCode2 = styled.div`
  font-size: 2rem;
  text-transform: uppercase;
   margin: 3rem auto;
   @media only screen and (max-width: 930px ) {
     font-size: 1.5rem;
   }
    @media only screen and (max-width: 400px ) {
     font-size: 1rem;
     margin: 1rem;
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
     height: 5rem;
     top: 13px;
   }
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  #number{
    margin: 0;
    padding: 0;
    display: inline-block;
    font-family: 'Bookman';
    font-size: 10rem;
    color: black;
       @media only screen and (max-width: 930px ) {
     font-size: 6rem;
        
   }
    @media only screen and (max-width: 400px ) {
    margin: 3rem 4rem;
    }
  }
  #count {
    display: inline-block;
    color: ${props => props.color};
    transition: color 0.5s ease;
  }
`
const StyledFace = styled.div`
  display: inline-block;
  width: 43%;
   padding: 1rem;
   @media only screen and (max-width: 440px ) {
     display: flex;
     align-content: center;
     #face {
       margin: 5rem;
       margin-top: 4rem;
     }
   }
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
  [class~="MuiPaper-rounded"] {
    border-radius: 25%;
    display:none;
  }
  p{
    padding: 1rem;
    font-size: 1.5rem;
    color: white;
    text-align: center;
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
    this.state.time = 10
    this.state.color = 'rgba(253, 187, 48, 1)'
  }

  changeTime () {
  let interval =  setInterval( () => {
      console.log(this.state.time)
      let current = this.state.time
      current = current - 1
      if(current % 2 !== 0 && current < 6) {
        this.setState({
          color: 'rgba(230, 43, 30)'
        })
      } else {
        this.setState({
          color: 'rgba(253, 187, 48, 1)'
        })
      }
      if(current === 0) {
        console.log('this is the end')
        console.log(clearInterval(interval))
        window.location.href = window.location.origin.concat('/')
      }
      this.setState({
        time: current, 
      })
    }, 1000)
  }

  componentDidMount(){
    this.changeTime();
  }

  render() {
    return (
     <Container>
       <StyledBox>
           <StyledCode>
         <Header>
              Err<img src={wlmt} alt="" />r <div id="number">{this.props.error}</div>  
         </Header>
           </StyledCode>
           <StyledFace>
          <IconDelay
            size="10"
            id="face"
            color={this.state.color}
          >
            sentiment_dissatisfied
              </IconDelay>
           </StyledFace>
           <CardItemContainer
           id="itemcontainer"
           >
             <StyledMsgBox>
          <p>
          {this.props.message}
          </p>
             </StyledMsgBox>
           </CardItemContainer>
           <StyledCode2>
            <Header color={this.state.color}> <a href="//localhost:3000">Unless you click here, this site will self destruct in</a>   <div id="count">{this.state.time}</div>
          </Header>
           </StyledCode2>
       </StyledBox>
     </Container>
    )
  }
}

export default Splash
