import React from 'react'

import LineItem from '../../components/LineItem'

const mock = {
  line: [
    {
      id: 0,
      department: 'D1',
      name: 'something'
    },
    {
      id: 1,
      department: 'D2',
      name: 'else'
    },
    {
      id: 2,
      department: 'D3',
      name: 'something else'
    }
  ]
}

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.mock = mock
  }

  render () {
    return (
      <div>
        <LineItem
          line={this.state.mock.line[0]}
        >
        </LineItem>
      </div>
    )
  }
}

export default MockChange
