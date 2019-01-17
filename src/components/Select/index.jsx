import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import FilledInput from '@material-ui/core/FilledInput'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import styled from 'styled-components'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
})

const SelectStyled = styled.div`
    margin: auto;
  .SimpleSelect-formControl-75{
      background: white;
      min-width: 8.2rem;
    }
  `

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0
  }

  componentDidMount () {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    })
  }

  handleChange = name => event => {
    console.log('test')
    this.setState({ [name]: event.target.value })
  }

  justTest = (event) => {
    console.log(event.target.value)
    this.setState({ age: event.target.value })
  }

  renderSelects = () => {
    const { classes } = this.props
    const selects = this.props.selects.map((select, idx) => {
      return (
        <SelectStyled>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref
              }}
              htmlFor="outlined-age-simple"
            >
              {select.name}
            </InputLabel>
            <Select
              value={this.state.age}
              onChange={this.justTest}
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name={select.name}
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </SelectStyled>
      )
    })
    return selects
  }

  render () {
    const { classes } = this.props

    return (
      <form className={classes.root} autoComplete="off">
        {this.renderSelects()}
      </form>
    )
  }
}

export default withStyles(styles)(SimpleSelect)
