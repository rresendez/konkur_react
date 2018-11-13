import styled from 'styled-components'

const Icon = styled.i`
  width: 100%;
  height: 100%;
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: ${props => `${props.size}rem` || '1.5rem'}; /* Preferred icon size */
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  color: ${props => props.color};
`
export default Icon
