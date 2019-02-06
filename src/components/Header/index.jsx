import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

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
  margin-right: .5rem;
`

const TitleWrapper = styled.div`
  box-sizing: border-box;
  margin-left: .5rem;
`

const UsernameWrapper = styled.div`
  font-size: ${props => {
    if (props.isAdmin) return '.8rem'
    return '1rem'
  }};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 25.25rem) {
    max-width: 5rem;
  }
`

const UserLabelWrapper = styled.div`
  font-size: ${props => {
    if (props.isAdmin) return '.8rem'
    return '1rem'
  }};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 25.25rem) {
    max-width: 5rem;
  }
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
            <MediaQuery query="(min-width: 23.5rem)">
              <LoginInformationContainer>
                <UsernameWrapper isAdmin={this.props.isAdmin}>
                  {this.props.username}
                </UsernameWrapper>
                {
                  this.props.isAdmin && (
                    <UserLabelWrapper isAdmin={this.props.isAdmin}>
                      Admin
                    </UserLabelWrapper>
                  )
                }
              </LoginInformationContainer>
            </MediaQuery>
            <MediaQuery query="(min-width: 23.5rem)">
              <IconButton aria-label="Menu">
                <Icon auto color="rgba(0,0,0,0)">account_circle</Icon>
              </IconButton>
            </MediaQuery>
          </Toolbar>
        </AppBar>
      </HeaderContainer>
    )
  }
}

Header.defaultProps = {
  title: 'KUNKUR 3.0',
  isAdmin: true,
  username: 'Jesus Cruz Barroso'
}

export default Header
