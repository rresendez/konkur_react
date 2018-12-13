import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import { withTheme, withStyles } from '@material-ui/core/styles'

import Icon from '../Icon'

import ColorPicker from '../ColorPicker'

const CardItemContainer = withStyles({
  root: {
    height: '100%'
  }
})(Card)

const StyledCard = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const Title = styled.div`
  color: ${props => props.titleColor};
  font-weight: bold;
  letter-spacing: .5rem;
  text-transform: uppercase;
  padding: .5rem;
`

const TitleWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.cardColor};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: .5rem;
  text-align: center;
  width: 100%;
`

const CardButtonWrapper = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
`

const CardContent = styled.div`
  box-sizing: border-box;
  padding 1rem;
  width: 100%;
`

const TextFieldWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`

const ItemLabel = styled.div`
  color: rgba(59,59,59,1);
  margin-top: 1rem;
  width: 100%;
  text-align: center;
`

const TimeLabel = styled.div`
  color: rgba(161,161,161,1);
  margin-top: 1rem;
  text-align: center;
  width: 100%;
`
const SaveButton = styled.div`
  text-align: right;
  width: 100%;
`
class CardItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      index: 0,
      newColor: null,
      leftDisable: true,
      rightDisable: false,
      newArray: {}
    }
  }

  handleOnClick = (event) => {
    const side = parseInt(event.currentTarget.getAttribute('data-next'))
    this.setState({ rightDisable: false })
    this.setState({ leftDisable: false })
    if (this.state.index < this.props.colors.length - 1 && side > 0) {
      this.setState({ index: this.state.index + side })
      if (this.state.index === this.props.colors.length - 2) {
        this.setState({ rightDisable: true })
      }
    } else if (side < 0 && this.state.index > 0) {
      this.setState({ index: this.state.index + side })
      if (this.state.index === 1) {
        this.setState({ leftDisable: true })
      }
      this.setState({ newColor: null })
    } else {
      console.log('out')
    }
  }

  handleOnChangeColor = (color, event) => {
    this.setState({
      newColor: color
    })
  }

  renderPicker = () => {
    if (this.state.index === this.props.colors.length - 1) {
      if (this.state.newColor === null) {
        this.setState({ newColor: '#ff2800' })
      }
      return (
        <ColorPicker
          handleOnChange={this.handleOnChangeColor}
        />
      )
    }
  }

  renderInput = (label) => {
    return (
      <div>
        <TextField
          label={label}
        />
      </div>
    )
  }
  renderSave = (index) => {
    if (index === this.props.colors.length - 1) {
      return (
        <IconButton
          aria-label="Save"
        >
          <Icon color="black" size="1.5">check</Icon>
        </IconButton>
      )
    }
  }

  render () {
    return (
      <StyledCard>
        <CardItemContainer raised={this.props.raised}>
          <TitleWrapper cardColor={this.state.newColor === null ? this.props.colors[this.state.index].color : this.state.newColor}>
            {this.renderPicker()}
            <CardButtonWrapper>
              <Button
                onClick={this.handleOnClick}
                data-next="-1"
                disabled={this.state.leftDisable}
              >
                <Icon
                  color="white"
                  size="2"
                >
                  keyboard_arrow_left
                </Icon>
              </Button>
              <Button
                onClick={this.handleOnClick}
                data-next="1"
                disabled={this.state.rightDisable}
              >
                <Icon
                  color="white"
                  size="2"
                >
                  keyboard_arrow_right
                </Icon>
              </Button>
            </CardButtonWrapper>
            <Title titleColor={this.props.titleColor}>
              {this.state.index === this.props.colors.length - 1
                ? this.renderInput(this.props.colors[this.state.index].name)
                : this.props.colors[this.state.index].name}
            </Title>
          </TitleWrapper>
          <SaveButton>
            {this.renderSave(this.state.index)}
          </SaveButton>
          <CardContent>
            <TextFieldWrapper>
              <TextField
                label="Sub category"
                fullWidth
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                label="Card title"
                fullWidth
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                label="Data level"
                fullWidth
              />
            </TextFieldWrapper>
            {this.props.itemCount ? (<ItemLabel>{this.props.itemCount}</ItemLabel>) : null}
            {this.props.date ? (<TimeLabel>{this.props.date}</TimeLabel>) : null}
          </CardContent>
        </CardItemContainer>
      </StyledCard>
    )
  }
}

CardItem.propTypes = {
  cardColor: PropTypes.string.isRequired,
  titleColor: PropTypes.string,
  title: PropTypes.string,
  raised: PropTypes.bool,
  itemCount: PropTypes.string,
  date: PropTypes.string
}

CardItem.defaultProps = {
  cardColor: '#ffc220',
  titleColor: '#fff',
  title: 'fulfillment', // 'fulfillment',
  raised: false,
  itemCount: 'Pending item count comes here',
  date: 'last updatedtime comes here ...' // 'Wednesday, July 25, 2018'
}

export default withTheme()(CardItem)
