import React from 'react'
import styled from 'styled-components'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import Icon from '../Icon'
import Header from '../Header'

const SceneHOCContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: 4.5rem;
`

const DrawerContainer = styled.div`
  height: 100%;
  box-sizing: border-box;
  min-width: 15.625rem;
`

export default function SceneHOC (WrappedComponent) {
  return class SceneHOC extends React.Component {
    static defaultProps = {}
    static propTypes = {}

    constructor (props) {
      super(props)
      this.state = {}
      this.state.open = false
    }
    
    componentWillMount () {
      window.scrollTo(0, 0)
    }

    componentWillUnmount () {
      window.scrollTo(0, 0)
    }

    handleOnClickMenu = (event) => {
      this.setState((prevState) => ({
        open: !prevState.open
      }))
    }

    handleOnCloseMenu = (event) => {
      this.setState({
        open: false
      })
    }

    renderItems = () => {
      return (
        <List>
          <ListItem button>
              <ListItemIcon><Icon size="1.5">dashboard</Icon></ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemIcon><Icon size="1.5">supervisor_account</Icon></ListItemIcon>
              <ListItemText primary="Admin module" />
            </ListItem>
        </List>
      )
    }

    render () {
      return (
        <SceneHOCContainer>
          <Header
            handleOnClickMenu={this.handleOnClickMenu}
          />
          <ContentWrapper>
            <SwipeableDrawer
              open={this.state.open}
              onClose={this.handleOnCloseMenu}
              // onOpen={this.handleOnClickMenu('left', true)}
            >
              <DrawerContainer
                tabIndex={0}
                role="button"
                onKeyDown={this.handleOnCloseMenu}
              >
                {this.renderItems()}
              </DrawerContainer>
            </SwipeableDrawer>
            <WrappedComponent {...this.props} />
          </ContentWrapper>
        </SceneHOCContainer>
      )
    }
  }
}