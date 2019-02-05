import React from 'react'
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

import Icon from '../Icon'

import logo from '../../assets/kunkur-logo.png'

const HeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  flex-grow: 1;
`

const TitleContainer = styled.div`
  box-sizing: border-box;
  flex-grow: 1;
  margin-left: ${props => props.theme.spacing.defaultMargin};
  display: flex;
  align-items: center;
`

const LoginInformationContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: ${props => props.theme.spacing.defaultMargin};
`

const TitleWrapper = styled.div`
  box-sizing: border-box;
  margin-left: .5rem;
`

class Header extends React.Component {
  render () {
    return (
      <HeaderContainer>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              aria-label="Menu"
              onClick={this.props.handleOnClickMenu}
            >
              <Icon auto color="rgba(0,0,0,0)">menu</Icon>
            </IconButton>
            <TitleContainer>
              <img
                style={{
                  maxWidth: '32px',
                  cursor: 'pointer'
                }}
                src={logo}
                onClick={this.props.handleOnClickLogo}
                alt="kunkur logo" />
              <TitleWrapper>
              {this.props.title}
              </TitleWrapper>
            </TitleContainer>
            <LoginInformationContainer>
              <div>
                {this.props.username}
              </div>
              {
                this.props.isAdmin && (
                  <div>
                    Admin view
                  </div>
                )
              }
            </LoginInformationContainer>
            <IconButton aria-label="Menu">
              <Icon auto color="rgba(0,0,0,0)">account_circle</Icon>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HeaderContainer>
    )
  }
}

Header.defaultProps = {
  title: 'KUNKUR 3.0',
  isAdmin: false,
  username: 'Brian Upward'
}

export default Header
