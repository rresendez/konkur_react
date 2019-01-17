import React from 'react'

import LineItem from '../LineItem'
import IconButton from '@material-ui/core/IconButton'
import Icon from '../Icon'
import { withStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'

import styled from 'styled-components'

const wYellow = 'rgba(255,192,0,1)'
const wYellowLight = 'rgba(255,192,0,0.75)'

const BaseStyled = styled.div`
  display:grid;
  grid-template-columns: auto auto auto;
  grid-template-row: 5% 90% 5%;
  grid-gap: 1rem;
  background-color: ${props => props.color || 'white'}
  zoom: 90%;
  height: 100%;
  min-width: 724px;
  `
const RefreshStyled = styled.div`
  grid-column: 3/3;
  grid-row: 1;
  grid-row-end: 1;
  float: rigth;
  margin: 0 auto;
  `
const RightArrowStyled = styled.div`
  grid-column: 3/3;
  grid-row: 2;
  grid-row-end: 2;
  margin: auto;
  `
const LeftArrowStyled = styled.div`
  grid-column: 1/1;
  grid-row: 2;
  grid-row-end: 2;
  margin: auto;
  `
const RotateStyled = styled.div`
  transform: rotate(275deg);
  `

const ColumnStyled = styled.div`
  display:grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 1rem;
  background-color: ${props => props.color || 'white'}
  grid-column: 2/2;
  grid-row: 2;
  grid-row-end: 2;
  padding-top: 1rem;
  height: 17.5rem;
  `
const LoadingStyled = styled.div`
  grid-column: 2/2;
  grid-row: 2;
  grid-row-end: 2;
  padding-top: 1rem;
  width: 100%;
  height: 17.5rem;
  width: 71rem;
  `
const LineStyled = styled.div`
  margin: 0 auto;
  &:last-child{
    margin-bottom: 1rem;
  }
`
const HeaderStyled = styled.div`
 grid-column: 2/2;
 grid-row: 1;
 grid-row-end: 1;
 text-align: center;
 margin: 0 auto;
 text-transform: capitalize;
 color: rgba(166,166,166,1);
`
const BottomStyled = styled.div`
 grid-column: 2/2;
 grid-row: 3;
 grid-row-end: 3;
 text-align: center;
 margin: 0 auto;
 text-transform: capitalize;
 height: 4.5rem;
`
const EmptyContainer = styled.div`
  height: 17.5rem;
  width: 71rem;
  padding-top: 1rem;
  text-align: center
  display: flex;
`
const EmptyFooterContainer = styled.div`
  height: 11.6rem;
  width: 100%;
  padding-top: 1rem;
  grid-column: 2/2;
  grid-row: 4;
`
const EmptyFooterLoad = styled.div`
  height: 13.12rem;
  width: 100%;
  padding-top: 1rem;
  grid-column: 2/2;
  grid-row: 4;
`
const TitleCenter = styled.div`
  margin: 0 auto;
  margin-top: 7rem;
  grid-column: 2/3;
  grid-row: 2;
  grid-row-end: 4;
  height: 100%;
  width: 100%;
`
const LoadingCenter = styled.div`
  margin: auto;
  margin-top: 7rem;
  grid-column: 1/4;
  grid-row: 2;
  grid-row-end: 4;
  height: 100%;
  width: 90%;
  padding-top: 2rem;
`
class LineDrop extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  dragHandler = (event) => {
    event.preventDefault()
    console.log('draggin')
  }

  dropHandler = (event) => {
    event.preventDefault()
    let data = JSON.parse(event.dataTransfer.getData('application/json'))
    console.log(data)
    this.props.handleSelectedLine(data)
  }

  renderColumns = () => {
    const columns = this.props.lines.map((line, idx) => {
      return (
        <LineStyled>
          <LineItem
            key={idx}
            line={line}
          >
          </LineItem>
        </LineStyled>
      )
    })
    return columns
  }

  render () {
    if (this.props.loading) {
      return (
        <div
          onDrop={(event) => { this.dropHandler(event) }}
          onDragOver={(event) => { this.dragHandler(event) }}
        >
          <BaseStyled>
            <HeaderStyled>
              <h2>{this.props.title}</h2>
            </HeaderStyled>
            <LoadingCenter>
              <LinearProgress></LinearProgress>
            </LoadingCenter>
            <RefreshStyled>
              <IconButton>
                <RotateStyled>
                  <Icon
                    color={wYellowLight}
                    size={3}
                  >
                  </Icon>
                </RotateStyled>
              </IconButton>
            </RefreshStyled>
            <RightArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                </Icon>
              </IconButton>
            </RightArrowStyled>
            <LeftArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                </Icon>
              </IconButton>
            </LeftArrowStyled>
            <EmptyFooterLoad></EmptyFooterLoad>
          </BaseStyled>
        </div>
      )
    } else if (this.props.status === 'ready' && !this.props.disabled) {
      return (
        <div
          onDrop={(event) => { this.dropHandler(event) }}
          onDragOver={(event) => { this.dragHandler(event) }}
        >
          <BaseStyled>
            <HeaderStyled>
              <h2>{this.props.title}</h2>
            </HeaderStyled>
            <ColumnStyled>
              {this.renderColumns()}
            </ColumnStyled>
            <RefreshStyled>
              <IconButton>
                <RotateStyled>
                  <Icon
                    color={wYellow}
                    size={3}
                  >
                    refresh
                  </Icon>
                </RotateStyled>
              </IconButton>
            </RefreshStyled>
            <RightArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                  keyboard_arrow_right
                </Icon>
              </IconButton>
            </RightArrowStyled>
            <LeftArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                  keyboard_arrow_left
                </Icon>
              </IconButton>
            </LeftArrowStyled>
            <BottomStyled>
              <h3>{this.props.bottomText}</h3>
            </BottomStyled>
          </BaseStyled>
        </div>
      )
    } else if (this.props.status === 'empty' && !this.props.disabled) {
      return (
        <div
          onDrop={(event) => { this.dropHandler(event) }}
          onDragOver={(event) => { this.dragHandler(event) }}
        >
          <BaseStyled>
            <HeaderStyled>
              <h2>{this.props.title}</h2>
            </HeaderStyled>
            <TitleCenter>
              <h2>{this.props.pleaseDrop}</h2>
            </TitleCenter>
            <RefreshStyled>
              <IconButton>
                <RotateStyled>
                  <Icon
                    color={wYellowLight}
                    size={3}
                  >
                  </Icon>
                </RotateStyled>
              </IconButton>
            </RefreshStyled>
            <RightArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                </Icon>
              </IconButton>
            </RightArrowStyled>
            <LeftArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                </Icon>
              </IconButton>
            </LeftArrowStyled>
            <EmptyFooterContainer></EmptyFooterContainer>
          </BaseStyled>
        </div>
      )
    } else if (this.props.disabled) {
      return (
        <div
        >
          <BaseStyled
            color={'lightgray'}
          >
            <HeaderStyled>
              <h2>{this.props.title}</h2>
            </HeaderStyled>
            <TitleCenter>
              <h2>{this.props.pleaseDrop}</h2>
            </TitleCenter>
            <RefreshStyled>
              <IconButton>
                <RotateStyled>
                  <Icon
                    color={wYellowLight}
                    size={3}
                  >
                  </Icon>
                </RotateStyled>
              </IconButton>
            </RefreshStyled>
            <RightArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                </Icon>
              </IconButton>
            </RightArrowStyled>
            <LeftArrowStyled>
              <IconButton>
                <Icon
                  color={wYellow}
                  size={4}
                >
                </Icon>
              </IconButton>
            </LeftArrowStyled>
            <EmptyFooterContainer></EmptyFooterContainer>
          </BaseStyled>
        </div>
      )
    }
  }
}

export default LineDrop
