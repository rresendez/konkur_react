import styled from 'styled-components'

const Icon = styled.i`
  align-items: center;
  color: ${props => props.color};
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
`
export default Icon
