import React from 'react'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { SliderPicker, Slider } from 'react-color'

const StyledPaper = styled.div`
 padding: 1rem;
`
const StyledModified = styled.div`
 margin-bottom: 1rem;
 width: 100%;
 position: relative;
 overflow: hidden;
`
const StyledDisabled = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(250,250,250,.8);
  z-index: 10;
`
const ModifiedPaper = withStyles({
  root: {
    width: '100%'
  }
})(Paper)

class ColorPicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      background: { r: 255, g: 40, b: 0, a: 1 }
    }
  }

  handleChangeComplete = (color, event) => {
    console.log(color.rgb)
    this.setState({ background: color.rgb })
    this.props.handleOnChange(`rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})`)
  }
  render () {
    return (
      <StyledModified>
        {
          this.props.disabled && (
            <StyledDisabled />
          )
        }
        <ModifiedPaper>
          <StyledPaper>
            <SliderPicker
              color={ this.state.background }
              onChangeComplete={ this.handleChangeComplete }
            />
          </StyledPaper>
        </ModifiedPaper>
      </StyledModified>
    )
  }
}

export default ColorPicker
