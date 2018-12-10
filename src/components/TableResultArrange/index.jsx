import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import { withTheme, withStyles } from '@material-ui/core/styles'
import Icon from '../Icon'

const TextFieldWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`

class TableResultArrange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: false
    }
  }
  handleOnClickEditableButton = () => {
    this.setState({ editable: true })
  }
  renderRows = () => {
    const rows = this.props.rows.map((row, rowIdx) => {
      const cells = this.props.columns.map((column, columnIdx) => {
        return (
          <TableCell key={column.name}>{row[column.name]}</TableCell>
        )
      })
      return <TableRow key={rowIdx}>{cells}</TableRow>
    })

    return rows
  }
  renderButton = (idx) => {
    if (idx === this.props.columns.length - 1) {
      return (
        <IconButton
          aria-label="save"
          onClick={this.handleOnClickEditableButton}
        >
          <Icon color="black" size="1.5">save</Icon>
        </IconButton>
      )
    }
    return null
  }
  renderColumns = () => {
    if (this.state.editable) {
      const colmuns = this.props.columns.map((column, idx) => {
        return (
          <TableCell key={column.name}>
            <TextFieldWrapper>
              <TextField
                label={column.name === column.alias ? column.name : column.alias}
                fullWidth
              />
            </TextFieldWrapper>
          </TableCell>
        )
      })
      debugger
      return colmuns
    } else {
      const colmuns = this.props.columns.map((column, idx) => (
        <TableCell key={column.name}>
          <div onDragOver={this.dragoverHandler}
            onDrop={this.dropHandler}
          >
            <div draggable="true"
              data-column={JSON.stringify({ ...column, idx: idx })}
              onDragStart={this.dragstartHandler}
            >
              {column.alias}
            </div>
            {this.renderButton(idx)}
          </div>
        </TableCell>
      ))
      return colmuns
    }
  }

  handleClick = () => {
    const columns = [
      {
        name: 'item_nbr',
        alias: 'item_nbr',
        place: 0
      },
      {
        name: 'dept_nbr',
        alias: 'depto',
        place: 1
      },
      {
        name: 'cid_nbr',
        alias: 'cid value',
        place: 2
      }
    ]
    const temp = columns[0]
    columns[0] = columns[2]
    columns[2] = temp
    this.props.handleColumnsSortChange(columns)
  }
  dragstartHandler = (event) => {
    event.dataTransfer.setData('application/json', (event.target.getAttribute('data-column')))
    console.log(event)
  }
  dragoverHandler = (event) => {
    event.preventDefault()
    console.log('dragging')
  }
  dropHandler = (event) => {
    event.preventDefault()
    const dropped = JSON.parse(event.target.getAttribute('data-column'))
    const trans = JSON.parse(event.dataTransfer.getData('application/json'))
    const columns = this.props.columns
    const temp = columns[trans.idx]
    columns[trans.idx] = columns[dropped.idx]
    columns[dropped.idx] = temp
    this.props.handleColumnsSortChange(columns)
  }
  render () {
    return (
      <div>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                {this.renderColumns()}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderRows()}
            </TableBody>
          </Table>
        </div>
        <div>
          <button onClick={this.handleClick}></button>
        </div>
      </div>
    )
  }
}

export default TableResultArrange
