import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import { withTheme } from '@material-ui/core/styles'

import Icon from '../Icon'

const StyledCard = styled.div`
  box-sizing: border-box;
  max-width: 25rem;
`

const Title = styled.div`
  color: ${props => props.titleColor};
  font-weight: bold;
  letter-spacing: .5rem;
  text-transform: uppercase;
`

const TitleWrapper = styled.div`
  align-items: center;
  background-color: ${props => props.cardColor};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: .5rem;
  text-align: center;
  width: 100%;
`

const CardButton = styled.button`
  background-color: inherit;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  padding: .5rem;
`

const CardContent = styled.div`
  box-sizing: border-box;
  padding 1rem;
  width: 100%;
`

const TextFieldWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;

  &:first-child {
    margin-top: 0;
  }
`

class CardItem extends React.Component {
  render () {
    return (
      <StyledCard>
        <Card raised={this.props.raised}>
          <TitleWrapper cardColor={this.props.cardColor}>
            <CardButton>
              <Icon size="2">
                keyboard_arrow_left
              </Icon>
            </CardButton>
            <Title titleColor={this.props.titleColor}>
              {this.props.title}
            </Title>
            <CardButton>
              <Icon size="2">
                keyboard_arrow_right
              </Icon>
            </CardButton>
          </TitleWrapper>
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
          </CardContent>
        </Card>
      </StyledCard>
    )
  }
}

CardItem.propTypes = {
  cardColor: PropTypes.string,
  titleColor: PropTypes.string,
  title: PropTypes.string,
  raised: PropTypes.bool
}

CardItem.defaultProps = {
  cardColor: '#5612fe',
  titleColor: '#fff',
  title: 'fulfillment',
  raised: false
}

export default withTheme()(CardItem)
