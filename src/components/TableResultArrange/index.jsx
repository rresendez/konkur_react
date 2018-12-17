import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import RootRef from '@material-ui/core/RootRef'
import { withStyles } from '@material-ui/core/styles'
import Icon from '../Icon'

const TextFieldWrapper = styled.div`
  margin-top: 1rem;
  width: 100%;

  &:first-child {
    margin-top: 0;
  }
`

const EditColumnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`

const DropZoneWrapper = styled.div`
  background-color: ${props => props.dropHover};
  box-sizing: border-box;
  border: 0.0625rem dashed ${props => props.borderColor};
`

const DraggableZoneWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  min-width: 10.625rem;
`

const IconButtonDraggable = withStyles({
  root: {
    cursor: 'grab'
  }
})(IconButton)

const TextFieldModified = withStyles({
  root: {
    fontSize: '.75rem'
  }
})(TextField)

class TableResultArrange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editable: false,
      selectedDropabble: null,
      changed: false
    }
    this.tableHeadRef = React.createRef()
  }

  componentWillMount () {
    document.addEventListener('dragend', this.handleOutSideDrop)
  }

  shouldComponentUpdate (nextProps, nextState) {
    if (nextState.selectedDropabble === this.state.selectedDropabble &&
        nextState.changed === true && this.state.changed === true) {
      return false
    }
    return true
  }

  handleTableHeadRef = (componentRef) => {
    this.tableHeadRef = componentRef
  }

  handleOutSideDrop = (event) => {
    this.setState((previousState) => {
      return {
        changed: false,
        selectedDropabble: null
      }
    })
  }

  handleOnClickEditableButton = () => {
    this.setState((previousState) => {
      return {
        editable: !previousState.editable,
        changed: false,
        selectedDropabble: null
      }
    })
  }

  handleChangeInput = (event, idx) => {
    let newName = event.target.value
    let columns = [...this.props.columns]
    columns[idx].alias = newName
    this.props.handleOnChange(columns)
    this.setState((previousState) => {
      return {
        changed: !previousState.changed,
        selectedDropabble: null
      }
    })
  }

  dragstartHandler = (event) => {
    event.dataTransfer.setData(
      'application/json', (event.currentTarget.getAttribute('data-column'))
    )
  }

  dragoverHandler = (event, idx) => {
    event.preventDefault()
    this.setState({
      selectedDropabble: idx,
      changed: true
    })
  }

  dropHandler = (event, droppedColumn) => {
    event.preventDefault()
    const trans = JSON.parse(event.dataTransfer.getData('application/json'))
    const columns = [...this.props.columns]
    const temp = columns[trans.idx]
    columns[trans.idx] = columns[droppedColumn.idx]
    columns[droppedColumn.idx] = temp
    this.props.handleOnChange(columns)
    this.setState((previousState) => {
      return {
        changed: !previousState.changed,
        selectedDropabble: null
      }
    })
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
            <Icon color="gray" size="1">check</Icon>
          </IconButton>
        )
      } else {
        return (
          <IconButton
            aria-label="Edit"
            onClick={this.handleOnClickEditableButton}
          >
            <Icon color="gray" size="1">edit</Icon>
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
            <DropZoneWrapper
              onDragOver={(event) => { this.dragoverHandler(event, idx) }}
              onDrop={(event) => {
                this.dropHandler(event, { ...column, idx: idx })
              }}
              dropHover={this.state.selectedDropabble === idx ? '#c6f68d' : 'inherit'}
              borderColor={this.state.selectedDropabble === idx ? '#09af00' : 'inherit'}
            >
              <DraggableZoneWrapper>
                <div
                  draggable="true"
                  data-column={JSON.stringify({ ...column, idx: idx })}
                  onDragStart={this.dragstartHandler}
                >
                  <IconButtonDraggable
                    aria-label="Edit"
                  >
                    <Icon color="black" size="1.5">drag_handle</Icon>
                  </IconButtonDraggable>
                </div>
                <TextFieldModified
                  fullWidth
                  placeholder={column.name}
                  value={column.alias === column.name ? '' : column.alias}
                  onChange={(event) => { this.handleChangeInput(event, idx) }}
                />
                {this.renderButton(idx)}
              </DraggableZoneWrapper>
            </DropZoneWrapper>
          </TableCell>
        )
      })
      return colmuns
    } else {
      const colmuns = this.props.columns.map((column, idx) => (
        <TableCell key={column.name}>
          <EditColumnWrapper>
            {(column.alias === '' || column.alias === column.name) ? column.name : column.alias}
            {this.renderButton(idx)}
          </EditColumnWrapper>
        </TableCell>
      ))
      return colmuns
    }
  }

  render () {
    return (
      <Table>
        <RootRef rootRef={this.tableHeadRef}>
          <TableHead>
            <TableRow>
              {this.renderColumns()}
            </TableRow>
          </TableHead>
        </RootRef>
        <TableBody>
          {this.renderRows()}
        </TableBody>
      </Table>
    )
  }
}

TableResultArrange.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  handleOnChange: PropTypes.func.isRequired
}

export default TableResultArrange
