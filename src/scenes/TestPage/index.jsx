import React from 'react'
import TableResultArrange from '../../components/TableResultArrange'

const mock = {
  columns: [
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
  ],
  rows: [
    {
      item_nbr: '1',
      dept_nbr: '23'
    },
    {
      item_nbr: '34',
      dept_nbr: '2233',
      cid_nbr: '323'
    }
  ]
}

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.columns = mock.columns
  }

  handleColumnsSortChange = (columns) => {
    this.setState({
      columns
    })
  }
  render () {
    return (
      <div>
        <div>
          <TableResultArrange
            columns={this.state.columns}
            rows={mock.rows}
            handleOnChange={this.handleColumnsSortChange}
          />
        </div>
      </div>
    )
  }
}

export default MockChange
