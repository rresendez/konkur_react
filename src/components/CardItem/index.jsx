import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import { customTheme } from '../../global-styles/theme-contexts'
import LinearProgress from '@material-ui/core/LinearProgress'

import Icon from '../Icon'

import ColorPicker from '../ColorPicker'

const TextFieldWhite = withStyles({
  input: {
    color: customTheme.typography.colorWhite
  }

})((props) => {
  return (
    <TextField InputProps={{ classes: { root: props.classes.input } }} {...props} />
  )
})

const TextFieldBlack = withStyles({
  input: {
    color: customTheme.typography.colorBlack
  }
})(TextField)

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

const LinearProgressWrapper = styled.div`
  flex-grow: 1;
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

  handleOnClickOpenEditable = (event) => {
    this.props.handleOnChangeEditable(true)
  }

  handleOnClickEditableButton = () => {
    this.props.handleOnSaveCardComponent({
      name: this.props.cardComponentTitle,
      color: this.props.cardComponentColor
    })
  }

  handleOnClickLeftNavigationCardComponent = (event) => {
    this.props.handleOnChangeCardComponent(this.props.selectedCardComponent - 1)
  }

  handleOnCLickRightNavigationCarComponent = (event) => {
    this.props.handleOnChangeCardComponent(this.props.selectedCardComponent + 1)
    if (this.props.selectedCardComponent === this.props.colors.length - 2) {
      this.props.handleOnChangeEditable(true)
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

  handleOnCloseEditable = (event) => {
    this.props.handleOnChangeEditable(false)
    this.props.handleOnCloseEditable(event)
  }

  handleOnChangeNewCardComponentTitle = (event) => {
    this.props.handleOnChangedCardComponentTitle(event.target.value, event)
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

  computeSaveButtonState = () => {
    if (this.props.cardComponentColorCouldNotBeSaved) return true
    if (this.props.loading) return true
    return false
  }

  computeDeleteButtonState = () => {
    if (this.props.cardComponentCouldNotBeDeleted) return true
    if (this.props.loading) return true
  }

  renderPicker = () => {
    if (this.props.editable) {
      return (
        <ColorPicker
          handleOnChange={this.handleOnChangeColor}
          disabled={this.props.loading}
        />
      )
    }
  }

  renderInput = (label) => {
    const colorToPaint = this.props.theme.typography.getColor(this.props.cardComponentColor)

    if (colorToPaint === customTheme.typography.colorBlack) {
      return (
        <TextFieldBlack
          value={this.props.cardComponentTitle}
          placeholder={(label) ? label.toUpperCase() : ''}
          onChange={this.handleOnChangeNewCardComponentTitle}
          cardComponentColor={this.props.cardComponentColor}
          disabled={this.props.loading}
        />
      )
    }

    return (
      <TextFieldWhite
        value={this.props.cardComponentTitle}
        placeholder={(label) ? label.toUpperCase() : ''}
        onChange={this.handleOnChangeNewCardComponentTitle}
        cardComponentColor={this.props.cardComponentColor}
        disabled={this.props.loading}
      />
    )
  }

  renderButton = (crud) => {
    if (this.props.editable) {
      if (this.props.selectedCardComponent !== this.props.colors.length - 1) {
        return (
          <div>
            <IconButton
              aria-label="Delete"
              disabled={this.props.cardComponentCouldNotBeDeleted}
              onClick={this.props.handleOnDeleteCardComponent}
              disabled={this.computeDeleteButtonState()}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
                disabled={this.computeDeleteButtonState()}
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
              disabled={
                this.computeSaveButtonState()
              }
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
                disabled={
                  this.computeSaveButtonState()
                }
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
              disabled={this.props.loading}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
                disabled={this.props.loading}
              >
                close
              </Icon>
            </IconButton>
            <IconButton
              aria-label="Save"
              onClick={this.handleOnClickEditableButton}
              disabled={this.computeSaveButtonState()}
            >
              <Icon
                auto
                color={this.props.cardComponentColor}
                size="1.5"
                disabled={this.computeSaveButtonState()}
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
            disabled={this.props.cardComponentCouldNotBeDeleted}
          >
            <Icon
              auto
              color={this.props.cardComponentColor}
              size="1.5"
              disabled={this.props.cardComponentCouldNotBeDeleted}
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
            onClick={this.handleOnClickOpenEditable}
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

  renderEmptyStatus = () => {
    return (
      <StyledCard>
        <CardItemContainer raised={this.props.raised}>
          <TitleWrapper
            cardColor={this.props.cardComponentColor}
          >

          </TitleWrapper>
          <CardContent>
            <TextFieldWrapper>
              <TextField
                label="..."
                fullWidth
                disabled
                value={this.props.cardSubComponent}
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                label="..."
                fullWidth
                disabled
                value={this.props.cardTitle}
              />
            </TextFieldWrapper>
            <TextFieldWrapper>
              <TextField
                label="..."
                fullWidth
                disabled
                value={this.props.cardDataLevel}
              />
            </TextFieldWrapper>
            {this.props.itemCount ? (<ItemLabel>...</ItemLabel>) : null}
            {this.props.date ? (<TimeLabel>...</TimeLabel>) : null}
          </CardContent>
        </CardItemContainer>
      </StyledCard>
    )
  }

  renderReadyStatus = () => {
    return (
      <StyledCard>
        <CardItemContainer raised={this.props.raised}>
          <TitleWrapper
            cardColor={this.props.cardComponentColor}
          >
            {this.renderPicker()}
            <CardButtonWrapper>
              <Button
                onClick={this.handleOnClickLeftNavigationCardComponent}
                data-next="-1"
                disabled={this.computeLeftButtonState()}
              >
                <Icon
                  color={this.props.cardComponentColor}
                  auto
                  size="2"
                  disabled={this.computeLeftButtonState()}
                >
                  keyboard_arrow_left
                </Icon>
              </Button>
              <Button
                onClick={this.handleOnCLickRightNavigationCarComponent}
                data-next="1"
                disabled={this.computeRightButtonState()}
              >
                <Icon
                  color={this.props.cardComponentColor}
                  auto
                  size="2"
                  disabled={this.computeRightButtonState()}
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
          {
            this.props.loading && (
              <LinearProgressWrapper>
                <LinearProgress />
              </LinearProgressWrapper>
            )
          }
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

  render () {
    if (this.props.status === 'empty') {
      return this.renderEmptyStatus()
    }

    if (this.props.status === 'ready') {
      return this.renderReadyStatus()
    }
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
  status: 'empty',
  cardColor: '#ffc220',
  titleColor: '#fff',
  title: 'fulfillment', // 'fulfillment',
  raised: false,
  itemCount: 'Pending item count comes here',
  date: 'last updatedtime comes here ...' // 'Wednesday, July 25, 2018'
}

export default withTheme(CardItem)
