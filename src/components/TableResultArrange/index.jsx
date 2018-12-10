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
    this.setState({ editable: !this.state.editable })
  }
  handleChangeInput = (event, idx) => {
    console.log(event.target.value)
    console.log(idx)
    let newName = event.target.value
    let columns = [...this.props.columns]
    columns[idx].alias = newName
    this.props.handleColumnsSortChange(columns)
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
      if (this.state.editable) {
        return (
          <IconButton
            aria-label="Save"
            onClick={this.handleOnClickEditableButton}
          >
            <Icon color="black" size="1.5">check</Icon>
          </IconButton>
        )
      } else {
        return (
          <IconButton
            aria-label="Edit"
            onClick={this.handleOnClickEditableButton}
          >
            <Icon color="black" size="1.5">edit</Icon>
          </IconButton>
        )
      }
    }
    return null
  }
  renderColumns = () => {
    if (this.state.editable) {
      const colmuns = this.props.columns.map((column, idx) => {
        return (
          <TableCell key={column.name}>
            <div onDragOver={this.dragoverHandler}
              onDrop={(event) => { this.dropHandler(event, { ...column, idx: idx }) }}
            >
              <div draggable="true"
                data-column={JSON.stringify({ ...column, idx: idx })}
                onDragStart={this.dragstartHandler}
                cursor="grab"
              >
                <IconButton
                  aria-label="Edit"
                >
                  <Icon color="black" size="1.5">drag_handle</Icon>
                </IconButton>

              </div>
              <TextFieldWrapper>
                <TextField
                  label={column.name === column.alias ? column.name : column.alias}
                  fullWidth
                  onChange={(event) => { this.handleChangeInput(event, idx) }}
                />
              </TextFieldWrapper>
              <div>
                {this.renderButton(idx)}
              </div >
            </div>
          </TableCell>
        )
      })
      return colmuns
    } else {
      const colmuns = this.props.columns.map((column, idx) => (
        <TableCell key={column.name}>
          {column.alias}
          {this.renderButton(idx)}
        </TableCell>
      ))
      return colmuns
    }
  }

  dragstartHandler = (event) => {
    console.log(event.currentTarget)
    event.dataTransfer.setData('application/json', (event.currentTarget.getAttribute('data-column')))
    console.log(event)
  }
  dragoverHandler = (event) => {
    event.preventDefault()
    console.log('dragging')
    this.cursor = 'grabbing'
  }
  dropHandler = (event, droppedColumn) => {
    event.preventDefault()
    const trans = JSON.parse(event.dataTransfer.getData('application/json'))
    const columns = [...this.props.columns]
    const temp = columns[trans.idx]
    columns[trans.idx] = columns[droppedColumn.idx]
    columns[droppedColumn.idx] = temp
    this.props.handleColumnsSortChange(columns)
  }
  render () {
    return (
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
    )
  }
}

export default TableResultArrange
