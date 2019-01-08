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
  height: 100%;
  width: 100%;
`

const Title = styled.div`
  color: ${props => props.theme.typography.getColor(props.color)};
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
  padding: ${props => {
    if (props.editable) {
      return '.5rem'
    }
    return '0'
  }};
  text-align: center;
  width: 100%;
  transition: background .5s ease;
`

const CardButtonWrapper = styled.div`
  display: flex;
  justifiy-content: center;
  align-items: center;
  margin-top: auto;
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
  color: ${props => props.theme.typography.colorDarkGray};
  margin-top: 1rem;
  width: 100%;
  text-align: center;
`

const TimeLabel = styled.div`
  color: ${props => props.theme.typography.colorLightGray};
  margin-top: 1rem;
  text-align: center;
  width: 100%;
`
const SaveButton = styled.div`
  text-align: right;
  margin-left: auto;
`

class CardItem extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      leftDisable: false,
      rightDisable: false,
      title: ''
    }
  }

  handleOnClickEditableButton = () => {
    this.props.handleOnChangeEditable()
    if (!this.props.editable) {
      this.setState({ leftDisable: true })
      this.setState({ rightDisable: true })
    } else {
      this.setState({ leftDisable: false })
      this.setState({ rightDisable: false })
    }
  }

  handleOnClick = (event) => {
    const side = parseInt(event.currentTarget.getAttribute('data-next'))
    if (this.props.selectedCardComponent < this.props.colors.length - 1 && side > 0) {
      this.props.handleOnChangeCardComponent(this.props.selectedCardComponent + 1)
      if (this.props.selectedCardComponent === this.props.colors.length - 2) {
        this.props.handleOnChangeEditable()
      }
    } else if (side < 0 && this.props.selectedCardComponent > 0) {
      this.props.handleOnChangeCardComponent(this.props.selectedCardComponent - 1)
      // this.setState({ newColor: null })
      this.props.handleOnChangeEditable()
    }
  }

  handleOnChangeColor = (color, event) => {
    const cardComponent = this.props.colors[this.props.selectedCardComponent]
    this.props.handleOnChangeCardComponentColor({
      newColor: color,
      currentCardComponent: cardComponent
    })
  }

  handleChangeInput = (event) => {
    this.setState({ newTitle: event.target.value })
    console.log(this.state.newTitle)
  }

  handleLastItem = (index, event) => {
    if (index === this.props.colors.length - 1) {
      this.props.handleOnChangeEditable()
    }
  }

  handleOnCloseEditable = (event) => {
    this.props.handleOnChangeEditable()
    this.props.handleOnCloseEditable(event)
  }

  handleOnChangeNewCardComponentTitle = (event) => {
    this.setState({ title: event.target.value })
  }

  computeName = () => {
    if (this.props.colors.length > 0) {
      return (this.props.editable)
        ? this.renderInput(this.props.colors[this.props.selectedCardComponent].name)
        : this.props.colors[this.props.selectedCardComponent].name
    }
    return ''
  }

  computeLeftButtonState = () => {
    if (this.props.editable) return true
    if (this.props.selectedCardComponent === 0) return true
  }

  computeRightButtonState = () => {
    if (this.props.editable) return true
    if (this.props.selectedCardComponent === (this.props.colors.length - 1)) return true
  }

  renderPicker = () => {
    if (this.props.editable) {
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
          value={this.state.title}
          placeholder={(label) ? label.toUpperCase() : ''}
          onChange={this.handleOnChangeNewCardComponentTitle}
        />
      </div>
    )
  }

  renderButton = (crud) => {
    if (this.props.editable) {
      if (this.props.selectedCardComponent !== this.props.colors.length - 1) {
        return (
          <div>
            <IconButton
              aria-label="Delete"
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
              >
                delete
              </Icon>
            </IconButton>
            <IconButton
              aria-label="Close"
              onClick={this.handleOnCloseEditable}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
              >
                close
              </Icon>
            </IconButton>
            <IconButton
              aria-label="Save"
              onClick={this.handleOnClickEditableButton}
              disabled={this.props.cardComponentColorCouldNotBeSaved}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
              >
                check
              </Icon>
            </IconButton>
          </div>
        )
      } else {
        return (
          <div>
            <IconButton
              aria-label="Close"
              onClick={this.handleOnCloseEditable}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
              >
                close
              </Icon>
            </IconButton>
            <IconButton
              aria-label="Save"
              onClick={this.handleOnClickEditableButton}
              disabled={this.props.cardComponentColorCouldNotBeSaved}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
              >
              check
              </Icon>
            </IconButton>
          </div>
        )
      }
    } else if (this.props.selectedCardComponent !== this.props.colors.length - 1 &&
      crud === 'update') {
      return (
        <div>
          <IconButton
            aria-label="Delete"
          >
            <Icon
              auto
              color={this.props.cardComponentColor}
              size="1.5"
            >
              delete
            </Icon>
          </IconButton>

          <IconButton
            aria-label="Edit"
            onClick={this.handleOnClickEditableButton}
          >
            <Icon
              color={this.props.cardComponentColor}
              size="1.5"
              auto
            >
              edit
            </Icon>
          </IconButton>
        </div>
      )
    } else {
      return (
        <div>
          <IconButton
            aria-label="Edit"
            onClick={this.handleOnClickEditableButton}
          >
            <Icon
              color={this.props.cardComponentColor}
              auto
              size="1.5"
            >
              edit
            </Icon>
          </IconButton>
        </div >

      )
    }
  }

  render () {
    if (this.props.colors.length === 0) {
      return null
    }

    return (
      <StyledCard>
        <CardItemContainer raised={this.props.raised}>
          <TitleWrapper
            cardColor={this.props.cardComponentColor}
          >
            {this.renderPicker()}
            <CardButtonWrapper>
              <Button
                onClick={this.handleOnClick}
                data-next="-1"
                disabled={this.computeLeftButtonState()}
              >
                <Icon
                  color={this.props.cardComponentColor}
                  auto
                  size="2"
                >
                  keyboard_arrow_left
                </Icon>
              </Button>
              <Button
                onClick={this.handleOnClick}
                data-next="1"
                disabled={this.computeRightButtonState()}
              >
                <Icon
                  color={this.props.cardComponentColor}
                  auto
                  size="2"
                >
                  keyboard_arrow_right
                </Icon>
              </Button>
            </CardButtonWrapper>
            <Title color={this.props.cardComponentColor}>
              {this.computeName()}
            </Title>
            <SaveButton>
              {this.renderButton(this.props.crud)}
            </SaveButton>
          </TitleWrapper>
          <CardContent>
            <TextFieldWrapper>
              <TextField
                label="Sub component"
                fullWidth
                onChange={this.props.handleOnChangeCardSubComponent}
                value={this.props.cardSubComponent}
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                label="Card title"
                fullWidth
                onChange={this.props.handleOnChangeCardTitle}
                value={this.props.cardTitle}
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                label="Data level"
                fullWidth
                onChange={this.props.handleOnChangeCardDataLevel}
                value={this.props.cardDataLevel}
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
  date: PropTypes.string,
  colors: PropTypes.array.isRequired,
  handleColors: PropTypes.func.isRequired,
  crud: PropTypes.string.isRequired,
  cardSubComponent: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired
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
