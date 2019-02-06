import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'

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

const LoginContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  padding: 1rem;
`

const UserDataWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const UserInfoWrapper = styled.div`
  box-sizing: border-box;
  margin-top: .5rem;
`

const UserWrapper = styled.div`
  box-sizing: border-box;
`

const IconWrapper = styled.div`
  box-sizing: border-box;
  margin-right: .5rem;
`

export default function SceneHOC (WrappedComponent) {
  return class SceneHOC extends React.Component {
    static defaultProps = {
      username: 'jesus miguel cruz',
      isAdmin: true
    }
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

    hanldeOnOpenMenu = (event) => {
      this.setState({
        open: true
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
              <ListItemText primary="Admin" />
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
              onOpen={this.hanldeOnOpenMenu}
            >
              <DrawerContainer
                tabIndex={0}
                role="button"
                onKeyDown={this.handleOnCloseMenu}
              >
                <MediaQuery query="(max-width: 23.5rem)">
                  <LoginContainer>
                    <IconWrapper>
                      <IconButton aria-label="user">
                        <Icon size="1.5">account_circle</Icon>
                      </IconButton>
                    </IconWrapper>
                    <UserDataWrapper>
                      <UserWrapper>
                        {this.props.username}
                      </UserWrapper>
                      {
                        this.props.isAdmin && (
                          <UserInfoWrapper>
                            Admin view
                          </UserInfoWrapper>
                        )
                      }
                    </UserDataWrapper>
                  </LoginContainer>
                </MediaQuery>
                <Divider />
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

