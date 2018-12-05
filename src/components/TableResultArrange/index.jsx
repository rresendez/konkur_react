import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

class TableResultArrange extends React.Component {
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

  renderColumns = () => {
    const colmuns = this.props.columns.map((column, idx) => (
      <TableCell key={column.name}>
        <div draggable="true">
          {column.alias}
        </div>
      </TableCell>
    ))
    return colmuns
  }

  handleClick = () => {
    const columns = [
      {
        name: 'dept_nbr',
        alias: 'depto',
        place: 1
      },
      {
        name: 'cid_nbr',
        alias: 'cid value',
        place: 2
      },
      {
        name: 'item_nbr',
        alias: 'item_nbr',
        place: 0
      }
    ]
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
