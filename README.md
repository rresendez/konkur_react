# BUYCA_KunkurInternationalView

## NodeJS version

We are using:
- nodejs -> 8.9.4 LTS -> https://nodejs.org/docs/latest-v8.x/api/documentation.html
- npm -> 5.6.0

## Comunication system between layers

This is the way each part of the frontend layers "talks" with each other:

```closure
component -> component
component -> container

container -> component
container -> reducer
container -> saga

saga -> saga
saga -> reducer

reducer -> container
```

## Libraries we are using with React

- React: -> https://reactjs.org/
- Redux: -> https://redux.js.org/
- Redux-Sagas: -> https://redux-saga.js.org/
- Styled Components: -> https://www.styled-components.com/
- immutableJS: -> https://facebook.github.io/immutable-js/
- axios: -> https://github.com/axios/axios
- react-responsive: -> https://github.com/contra/react-responsive
- react-router: -> https://reacttraining.com/react-router/
- reselect: -> https://github.com/reduxjs/reselect
- material-ui: -> https://material-ui.com

## Structure

### React component

Rules:

- We should always extends from ```React.Component ```.

Example:

```javascript
import React from 'react'

class ComponentNameExample extends React.Component {}
```
- The Class methods of a component should be Arrange in this way:
  1. Life cycle component methods like: ```componentWilMount, componentDidMount```
  2. Refs methods and you should always refthis in the variable: ```this.myRef```: ```handleRef```
  3. Handle logic methods with handleOn as prefix: ```handleOnCLick```
  4. Additional render methods like: ```renderItems```
  5. The render react method always at last: ```render```

Example:

```javascript
import React from 'react'
import PropTypes from 'prop-types'

class Button extends React.Component {

  componentWillMount () {
    // somethig...
  }

  handleRef (componentRef) {
    this.myRef = componentRef
  }

  handleOnClick = (event) => {
    if (!this.props.disabled) {
      this.props.handleOnClick(event)
    }
  }

  handleOnKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.handleClick(event)
    }
  }

  renderIcon = () => {
    if (this.props.icon !== '') {
      return (
        <span className={styles.iconContainer}>
        </span>
      )
    }
    return null
  }

  render () {
    const {filled, color, disabled, icon, title} = this.props
    return (
      <div
        tabIndex={this.props.tabIndex}
        className={styles.buttonContainer}
        onClick={this.handleOnClick}
        onKeyPress={this.handleOnKeyPress}
        data-filled={filled}
        data-color={color}
        disabled={disabled}
        ref={this.handleRef}
      >
        {this.renderIcon()}
        <span className={styles.buttonTitle}>
          {title}
        </span>
      </div>
    )re
  }
}
export default Button
```

- If a component should return a inside state it should be return with a prop function handler with this convention: ```handleOnChange```

Example:

```javascript
class ComponentWithState extends React.component {

  handleOnClick = (event) => {
    // do some logic for get a state here...

    this.props.handleOnChange(result)
  }

  render () {
    return (
      <div
        onClick={this.handleOnClick}
      >
      </div>
    )
  }
}

// implementation

class ParentComponentToReceiveState extends React.component {

  handleComponentChildState = (result) => {
    // do some logic for get a state here...
  }

  render () {
    return (
      <ComponentWithState
        handleOnChange={this.handleComponentChildState}
      />
    )
  }
}

```


#### PropTypes

Rules:

- Proptypes which are not required they should have a default value defined.
- Proptypes which are required they can't have a default prop assigned.

Example:

```javascript
Button.defaultProps = {
  icon: '',
  disabled: false,
  tabIndex: '-1'
}

Button.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  tabIndex: PropTypes.string,
  disabled: PropTypes.bool,
  filled: PropTypes.bool,
  color: PropTypes.string,
}
```

#### Styles

We are using for styling a lib that let us to manage things like states and theming more easy so insted of use common ```<div>``` tags for example, we should use wrapperStyled components through ```styled.div```.

Example:

```javascript
import styled from 'styled-components'

const Icon = styled.div`
  align-items: center;
  color: ${props => setColor(props.theme, props.color, props.auto)};
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
`
export default Icon

/*
this will create a ComponentWrapperTag like this: <Icon> even with props from the theme and with logic state handling 
*/
```

### The Theme

We are using a Theme context react provider we are store one of the most used attributes between state of component like colors, typography, even de default margin and padding, as some utilities to recalculate the correct color font for each color used in a component.

NOTE: This should be only used in our cusmtom component which are not part of Material UI Lib.

#### Using the Theme

In order to be able to use the theme, you need to implement a ```styled.tag``` from styled components when you want to use a value from theme you just have to implement a anonymous function and look for ```props.theme```

Example:

```javascript
import styled from 'styled-components'

const ComponentTagWrapper = styled.div`
  align-items: center;
  color: ${props => props.theme.typography.getColor(props.backgroundColor)};
  direction: ltr;
  display: flex;
  font-family: 'Material Icons';
  border-color: ${props => props.theme.color.primary}
`
export default Icon

/*
this will create a ComponentWrapperTag like this: <Icon> even with props from the theme and with logic state handling 
*/
```

#### styled components Kunkur Theme API Reference

```theme.typography```

key where you can get params related to typography exclusive.

```theme.typography.fontFamily```

returns the current FontFamily configured for project.

```theme.typography.getColor(colorToEvaluate)```

returns a proper color font for good contrast with the color evaluated.

```theme.typography.sizeDefault```

returns default value in rem for fonts.

```theme.typography.colorLightGray```

returns the gray light color defined in rgba form.

```theme.typography.colorDarkGray```

returns the gray dark color defined in rgba form.

```theme.typography.colorBlack```

returns the black color defined in rgba form.

```theme.typography.colorWhite```

returns the white color defined in rgba form.

```theme.color```

key where you can get params related to color palette exclusive.

```theme.color.primary```

returns the primary color defined in rgba form.

```theme.color.secondary```

returns the secondary color defined in rgba form.

```theme.color.warning```

returns the warning color defined in rgba form.

```theme.color.error```

returns the error color defined in rgba form.

```theme.color.enabled```

returns the enabled color defined in rgba form.

```theme.color.forbidden```

returns the forbidden color defined in rgba form.

```theme.spacing```

key where you can get params related to margins and paddings exclusive.

```theme.spacing.defaultPadding```

returns the default in rem value to use in generic padding components.

```theme.spacing.defaultMargin```
returns the default value in rem to use in generic margin values in components.

```theme.util```

key where you can get functions for caculate things like rems.

```theme.util.remCalc(pixels)```

returns the representation value of rems for a value given in pixels.