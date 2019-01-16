import React from 'react'
import styled from 'styled-components'

import LinearProgress from '@material-ui/core/LinearProgress'

const GlobalLoaderWrapper = styled.div`
flex-grow: 1;
position: fixed;
top: 0;
right: 0;
left: 0;
bottom: 0;
height: 100%;
width: 100%;
z-index: 3;
`

export default function Loader (props) {
  return (
    <GlobalLoaderWrapper>
      <LinearProgress color="secondary" />
    </GlobalLoaderWrapper>
  )
}
