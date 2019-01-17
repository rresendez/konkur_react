import React from 'react'

import LineDrop from '../../components/LineDrop'

const mock = {
  lines: [
    {
      department: 'D1',
      name: 'Candy'
    },
    {
      department: 'D2',
      name: 'Chocolate'
    },
    {
      department: 'D3',
      name: 'Auto'
    },
    {
      department: 'D4',
      name: 'Clothes'
    },
    {
      department: 'D5',
      name: 'Bath'
    },
    {
      department: 'D6',
      name: 'Wine'
    },
    {
      department: 'D7',
      name: 'Chips'
    },
    {
      department: 'D8',
      name: 'Frozen'
    },
    {
      department: 'D9',
      name: 'Pixa'
    },
    {
      department: 'D10',
      name: 'Computers'
    }
  ],
  lines2: []
}
let title = 'departments'
let bottomText = ''
if (mock.lines.length > 0) {
  bottomText = mock.lines.length.toString() + '/50 ' + title + ' assigned'
}
let next = 'categories'
let pleaseDrop = 'Drag and drop a ' + title.slice(0, title.length - 1) +
  ' to view ' + next + ' assigned'

class MockChange extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.state.status = 'ready'
    this.state.disabled = false
    this.state.loading = false
  }
  handleSelectedLine = (line) => {
    console.log('this is the state on parent')
    console.log(line)
  }

  render () {
    return (
      <div>
        <LineDrop
          lines={mock.lines}
          title={title}
          bottomText={bottomText}
          status={this.state.status}
          pleaseDrop={pleaseDrop}
          disabled={this.state.disabled}
          handleSelectedLine={this.handleSelectedLine}
          loading={this.state.loading}
        >
        </LineDrop>
      </div>
    )
  }
}

export default MockChange
