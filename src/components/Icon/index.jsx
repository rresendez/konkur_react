import styled from 'styled-components'

import { rgbaRegex } from '../../util/regex'

import { setColor } from '../../global-styles/util'

function computeColor (props) {
  if (props.disabled) {
    return props.theme.typography.colorLighGray
  }
  return setColor(props.theme, props.color, props.auto)
}

const Icon = styled.i`
  align-items: center;
  color: ${(props) => computeColor(props)};
  direction: ltr;
  display: flex;
  font-family: 'Material Icons';
  font-size: ${props => `${props.size}rem` || '1.5rem'}; /* Preferred icon size */
  font-style: normal;
  font-weight: normal;
  height: 100%;
  justify-content: center;
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  width: 100%;
  word-wrap: normal;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';

  transition: color .5s ease;
`
export default Icon
